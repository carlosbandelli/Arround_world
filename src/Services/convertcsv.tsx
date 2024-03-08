import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Button } from '../Components/Button';
import { Modal } from '../Components/Modal';

interface ExportCSVButtonProps {
  searchHistory: any[];
}

export function ExportCSVButton({ searchHistory }: ExportCSVButtonProps) {
  const [showEmptyListModal, setShowEmptyListModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCancelEmptyListModal = () => {
    setShowEmptyListModal(false);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  const convertToCSV = () => {
    if (!searchHistory || searchHistory.length === 0) {
      setShowEmptyListModal(true);
      return '';
    }

    const columns = [
      { label: 'Index', key: 'index' },
      { label: 'Bandeira', key: 'flags.png' },
      { label: 'Nome oficial', key: 'translations.por.official' },
      { label: 'Nome Comum', key: 'translations.por.common' },
      { label: 'População', key: 'population' },
      { label: 'Capital', key: 'capital[0]' },
      { label: 'Moeda internacional', key: 'currenciesKey' },
      { label: 'Moeda nacional', key: 'currencies.name' },
      { label: 'Símbolo', key: 'currencies.symbol' },
      { label: 'Idioma', key: 'languages' },
      { label: 'Abrir no Google Maps', key: 'maps.googleMaps' },
    ];

    const excelData = searchHistory.map(country => {
      const countryData: any = {};

      columns.forEach(column => {
        const keys = column.key.split('.');
        let value = country;

        keys.forEach(key => {
          if (value && value[key] !== undefined) {
            value = value[key];
          } else {
            value = undefined;
          }
        });

        if (column.key === 'flags.png') {
          countryData[column.label] = country.flags && country.flags.png;
        } else if (column.key === 'translations.por.official') {
          countryData[column.label] = country.translations && country.translations.por && country.translations.por.official;
        } else if (column.key === 'translations.por.common') {
          countryData[column.label] = country.translations && country.translations.por && country.translations.por.common;
        } else if (column.key === 'capital[0]') {
          countryData[column.label] = country.capital && country.capital[0];
        } else if (column.key === 'currenciesKey') {
        countryData[column.label] = country.currencies && Object.keys(country.currencies)[0];
        } else if (column.key === 'currencies.name') {
          countryData[column.label] = country.currencies && country.currencies[Object.keys(country.currencies)[0]].name;
        } else if (column.key === 'currencies.symbol') {
          countryData[column.label] = country.currencies && country.currencies[Object.keys(country.currencies)[0]].symbol;
        } else if (column.key === 'languages') {
          countryData[column.label] = country.languages && country.languages[Object.keys(country.languages)[0]];
        } else if (column.key === 'maps.googleMaps') {
          countryData[column.label] = country.maps && country.maps.googleMaps;
        } else if (column.key === 'index'){
            countryData[column.label] = country.index && country.index;
        } else {
          countryData[column.label] = value;
        }
      });

      return countryData;
    });

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(excelData, { header: columns.map(column => column.label) });
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    XLSX.writeFile(workbook, 'countries.xlsx');
    setShowSuccessModal(true)
  };

  return (
    <div>
      <Button
        type={'button'}
        text={'Download .xlsx'}
        iconName='FileDown'
        className='px-4 py-2 bg-lime-500 text-white rounded-md hover:animate-bounce'
        onClick={convertToCSV}
      />
      {showEmptyListModal && (
        <Modal
          title="Lista Vazia"
          body="Não há dados para exportar. "
          onCancel={handleCancelEmptyListModal}
          textButton1='Ok'
          className2='none'
          className1=' px-8 py-2 bg-amber-400 text-zinc-950 rounded hover:animate-pulse '
          divButton='flex justify-center'
          iconName1='Frown'
          iconSize1={20}
          iconColor1='black'
        />
      )}
        {showSuccessModal && (
        <Modal
          title="Sucesso!"
          body="O arquivo foi baixado com sucesso."
          onConfirm={handleSuccessModalClose}
          textButton2='Ok'
          className1='none'
          className2=' px-8 py-2 bg-emerald-700 text-white rounded hover:animate-pulse '
          divButton='flex justify-center'
          iconName2='Check'
          iconSize2={20}
        />
      )}

    </div>
  );
}
