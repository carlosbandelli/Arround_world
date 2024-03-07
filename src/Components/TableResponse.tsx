import { useState } from 'react';
import { CountryData } from '../Types/types';
import { removeAspas, formatarPopulacao } from './../Services/functions';
import { Button } from './Button';
import { Modal } from './Modal';

interface TableResponseProps {
  country: CountryData;
   onExecuteAgain: (countryName: string) => void;
   openGoogleMapsLink: (link: string) => void;

}

export function TableResponse({ country, onExecuteAgain, openGoogleMapsLink }: TableResponseProps) {
   const [showModal, setShowModal] = useState(false);

   const handleExecuteAgainClick = () => {
    setShowModal(true);
  };

  const handleConfirmExecuteAgain = () => {
    setShowModal(false);
    onExecuteAgain(country.translations.por.common);
  };

  const handleCancelExecuteAgain = () => {
    setShowModal(false);
  };

  if (!country) {
    return null;
  }

  return (
    <tr key={country.index}>
      <td className="border border-gray-400 px-4 py-2">
      <img src={removeAspas(country.flags.svg)} alt={removeAspas(country.flags.alt)} className="h-8 w-auto" />
      </td>
      <td className="border border-gray-400 px-4 py-2">{country.translations.por.official}</td>
      <td className="border border-gray-400 px-4 py-2">{country.translations.por.common}</td>
      <td className="border border-gray-400 px-4 py-2">{formatarPopulacao(country.population)}</td>
      <td className="border border-gray-400 px-4 py-2">{country.capital?.[0]}</td>
      <td className="border border-gray-400 px-4 py-2">{Object.keys(country.currencies)[0]}</td>
      <td className="border border-gray-400 px-4 py-2">{country.currencies && country.currencies[Object.keys(country.currencies)[0]].name}</td>
      <td className="border border-gray-400 px-4 py-2">{country.currencies && country.currencies[Object.keys(country.currencies)[0]].symbol}</td>
      <td className="border border-gray-400 px-4 py-2"><Button type={'button'} text={'Executar novamente'} iconName='RefreshCcwDot' iconSize={20} onClick={handleExecuteAgainClick} className= 'px-4 py-2 bg-violet-950 text-white rounded-md inline-block mr-2 hover:opacity-75 hover:animate-pulse'/></td>
      <td className="border border-gray-400 px-4 py-2"><Button type={'button'} text={'Google Maps'} iconName='MapPin' iconSize={20} onClick={() => openGoogleMapsLink(country.maps.googleMaps)} className= 'px-4 py-2 bg-sky-800 text-white rounded-md inline-block mr-2 hover:opacity-75 hover:animate-bounce transition duration-1000 '/></td>
        {showModal && (
        <Modal
          title="Executar Novamente?"
          body="Quando voce executa novamente, vai renderizar o mesmo pais na tela para voce, deseja Executar novamente?"
          onCancel={handleCancelExecuteAgain}
          onConfirm={handleConfirmExecuteAgain}
        />
      )}
    </tr>

  );
}
