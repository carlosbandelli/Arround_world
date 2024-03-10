import { useState } from "react";
import { CountryData } from "../Types/types";
import { Modal } from "./Modal";

interface CountryCardProps {
  country: CountryData;
  onExecuteAgain: (countryName: string, showModal: boolean) => void;
  openGoogleMapsLink: (link: string) => void;
}

export function CountryCard({ country, onExecuteAgain, openGoogleMapsLink }: CountryCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [countryName, setCountryName] = useState('');

  const handleExecuteAgain = (countryName: string, showModal: boolean) => {
    setCountryName(countryName);
    setShowModal(showModal);
  };

  const handleConfirmExecuteAgain = () => {
    onExecuteAgain(countryName, false);
    setShowModal(false);
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md bg-white">
      <img src={country.flags.png} alt={country.flags.alt} className="w-full h-48 object-cover" />

      <div className="p-4">
        <strong className="block text-lg font-bold">{country.translations.por.official}</strong>
        <span className="block text-sm text-gray-500">Nome Comum: {country.translations.por.common}</span>
        <span className="block text-sm text-gray-500">Nome oficial: {country.translations.por.official}</span>
        <span className="block text-sm text-gray-500">População: {country.population}</span>
        <span className="block text-sm text-gray-500">Capital: {country.capital?.[0]}</span>
        <span className="block text-sm text-gray-500">Moeda internacional: {Object.keys(country.currencies)[0]}</span>
        <span className="block text-sm text-gray-500">Moeda nacional: {country.currencies && country.currencies[Object.keys(country.currencies)[0]].name}</span>
        <span className="block text-sm text-gray-500">Símbolo: {country.currencies && country.currencies[Object.keys(country.currencies)[0]].symbol}</span>
        <button onClick={() => handleExecuteAgain(country.name.official, true)} className="mt-4 px-4 py-2 bg-violet-950 text-white rounded-md inline-block mr-2 hover:animate-spin-slow">Executar novamente</button>
        <button onClick={() => openGoogleMapsLink(country.maps.googleMaps)} className="px-4 py-2 bg-sky-800 text-white rounded-md inline-block mr-2 hover:animate-bounce-slow">Google Maps</button>
      </div>

      {showModal && (
        <Modal
          title="Executar Novamente?"
          body="Quando você executa novamente, vai renderizar o mesmo país na tela para você. Deseja Executar novamente?"
          onCancel={() => setShowModal(false)}
          onConfirm={handleConfirmExecuteAgain}
          textButton1='Cancelar'
          textButton2='Confirmar'
        />
      )}
    </div>
  );
}
