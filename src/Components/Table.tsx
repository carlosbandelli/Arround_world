import { useState } from "react";

import { TableResponse } from "./TableResponse";
import { CountryData } from "../Types/types";

import { Modal } from "./Modal";

interface TableProps {
  countries: CountryData[];
 onExecuteAgain: (countryName: string, showModal: boolean) => void;
  openGoogleMapsLink : (link: string) => void;

}

export function Table({ countries, onExecuteAgain, openGoogleMapsLink }: TableProps) {
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
    <>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Bandeira</th>
            <th className="border border-gray-400 px-4 py-2">Nome Oficial</th>
            <th className="border border-gray-400 px-4 py-2">Nome Comum</th>
            <th className="border border-gray-400 px-4 py-2">População</th>
            <th className="border border-gray-400 px-4 py-2">Capital</th>
            <th className="border border-gray-400 px-4 py-2">Moeda internacional</th>
            <th className="border border-gray-400 px-4 py-2">Moeda nacional</th>
            <th className="border border-gray-400 px-4 py-2">Simbolo</th>
            <th className="border border-gray-400 px-4 py-2">Executar Novamente</th>
            <th className="border border-gray-400 px-4 py-2">Abrir no Google Maps</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country: CountryData) => (
            <TableResponse key={country.index} country={country} onExecuteAgain={handleExecuteAgain} openGoogleMapsLink={openGoogleMapsLink} />
          ))}
        </tbody>
      </table>
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
    </>
  );
}
