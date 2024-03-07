import { CountryData } from '../Types/types';
import { removeAspas, formatarPopulacao } from './../Services/functions';

export function TableResponse({ country }: { country: CountryData }) {
  if (!country) {
    return null;
  }

  return (
    <tr key={country.ccn3}>
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

    </tr>
  );
}
