import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { fetchCountryData, generateCountryNameVariants, normalizeCountryName } from './Services/functions';
import { ExportCSVButton } from './Services/convertcsv';

import { Table } from './Components/Table';
import { CountryData } from './Types/types';
import { Header } from './Components/Header';
import { Title } from './Components/Title';
import { Form } from './Components/Form';
import { Loading } from './Components/Loading';
import { Input } from './Components/Input';
import { Button } from './Components/Button';
import { CountryCardContainer } from './Components/CountryCardContainer';
import { PanelsTopLeft, SquareAsterisk } from 'lucide-react';

export function App() {
  const [countryName, setCountryName] = useState('');
  const [searchHistory, setSearchHistory] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [offline, setOffline] = useState(false);
  const [viewMode, setViewMode] = useState<'Table' | 'Card'>('Table');

  const handleCountryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  const openGoogleMapsLink = (link: string) => {
    window.open(link, '_blank');
  };

  const handleToggleViewMode = (mode: 'Table' | 'Card') => {
    setViewMode(mode);
  };


const handleExecuteAgain = async (countryName: string) => {
  try {
    setLoading(true);
    setApiError(false);

    let countryToUpdateIndex: number = -1;

    for (let i = 0; i < searchHistory.length; i++) {
      const country = searchHistory[i];
      if (country.name.official === countryName) {
        countryToUpdateIndex = i;
        break;
      }
    }

    if (countryToUpdateIndex !== -1) {
      const newUuid = uuidv4();

      setSearchHistory(prevSearchHistory => {
        const updatedSearchHistory = [...prevSearchHistory];
        updatedSearchHistory[countryToUpdateIndex] = {
          ...updatedSearchHistory[countryToUpdateIndex],
          index: newUuid
        };
        updatedSearchHistory.push({
          ...searchHistory[countryToUpdateIndex],
         });
        return updatedSearchHistory;
      });
    }
  } catch (error) {
    //console.error('Erro ao buscar informações do país:', error);
    setApiError(true);
  } finally {
    setLoading(false);
  }
};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!navigator.onLine) {
      setOffline(true);
      return;
    }
    try {
      setLoading(true);
      setApiError(false);
      const normalizedCountryName = normalizeCountryName(countryName);
      const countryNameVariants = generateCountryNameVariants(normalizedCountryName);

      let foundExactMatch = false;

      for (const variant of countryNameVariants) {
        const response = await fetchCountryData(variant);
        if (response) {
          setSearchHistory(prevSearchHistory => [...prevSearchHistory, response]);
          if (variant === normalizedCountryName) {
            foundExactMatch = true;
          }
          break;
        }
      }

      if (!foundExactMatch && !countryNameVariants.includes(normalizedCountryName)) {
        //console.error('Erro: País não encontrado.');
      }
    } catch (error) {
      //console.error('Erro ao buscar informações do país:', error);
      setApiError(true);
    } finally {
      setLoading(false);
      setCountryName('');
    }
  };

   useEffect(() => {
    const handleOnline = () => {
      setOffline(false);
    };

    const handleOffline = () => {
      setOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

   return (
    <div className="py-10 space-y-8">
      <Header title="Consulta de Informações de Países"/>
      <main className="max-w-6xl mx-auto space-y-5">
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={countryName} onChange={handleCountryNameChange} placeholder="Digite o nome do país" className="border border-gray-300 rounded-md px-4 py-2 text-black" />
          <Button
            type={'submit'}
            text={'Buscar'}
            iconName='Search'
            iconSize={20}
            className='px-4 py-2 bg-green-700 text-white rounded-md inline-block mr-2 hover:opacity-75'
          />
          <ExportCSVButton searchHistory={searchHistory} />

        </Form>
        <div className="flex items-center justify-center">
          <Title level="h1" title="Histórico de Consultas"  />
          <div className="flex items-center m-2 space-x-4">
            <PanelsTopLeft size={24} className="cursor-pointer hover:animate-bounce-slow" onClick={() => handleToggleViewMode('Table')} />
            <SquareAsterisk size={24} className="cursor-pointer hover:animate-bounce-slow" onClick={() => handleToggleViewMode('Card')} />
          </div>
        </div>
        <div>
          {loading ? <Loading iconName='Loader' iconSize={50}/> : (offline ? <p>Você está offline. Por favor, verifique sua conexão com a internet.</p> : (apiError ? <p>A API não está respondendo. Tente novamente mais tarde.</p> : (
            viewMode === 'Table' ? <Table countries={searchHistory} onExecuteAgain={handleExecuteAgain} openGoogleMapsLink={openGoogleMapsLink} /> : <CountryCardContainer countries={searchHistory} onExecuteAgain={handleExecuteAgain} openGoogleMapsLink={openGoogleMapsLink} />
          )))}
        </div>
      </main>
    </div>
  );
}
