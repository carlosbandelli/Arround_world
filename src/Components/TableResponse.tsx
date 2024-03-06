import { CountryData } from '../Types/types';

interface TableResponseProps {
  country?: CountryData[];
  onSearchAgain?: () => void;
}

export function TableResponse({ country, onSearchAgain }: TableResponseProps) {
  if (!country || !country[0]) {
    return null;
  }

  return (
    <tr key={country[0].ccn3}>
      <td className="border border-gray-400 px-4 py-2">{country[0].translations.por.official}</td>
      <td className="border border-gray-400 px-4 py-2">{country[0].translations.por.common}</td>
      <td className="border border-gray-400 px-4 py-2">{country[0].capital?.[0]}</td>
      <td className="border border-gray-400 px-4 py-2">{country[0].population}</td>
      <td className="border border-gray-400 px-4 py-2"><button onClick={onSearchAgain} className="px-2 py-1 bg-blue-500 text-white rounded-md">Executar Novamente</button></td>
    </tr>
  );
}
