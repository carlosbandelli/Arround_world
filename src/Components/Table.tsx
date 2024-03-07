import { TableResponse } from "./TableResponse";
import { CountryData } from "../Types/types";

interface TableProps {
  countries: CountryData[];
}

export function Table({ countries }: TableProps) {
  return (
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
        </tr>
      </thead>
      <tbody>
        {countries.map((country: CountryData) => (
          <TableResponse key={country.ccn3} country={country} />
        ))}
      </tbody>
    </table>
  );
}
