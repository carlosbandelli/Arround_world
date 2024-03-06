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
          <th className="border border-gray-400 px-4 py-2">Nome Oficial</th>
          <th className="border border-gray-400 px-4 py-2">Nome Comum</th>
          <th className="border border-gray-400 px-4 py-2">Capital</th>
          <th className="border border-gray-400 px-4 py-2">População</th>
          <th className="border border-gray-400 px-4 py-2">Moeda</th>
          <th className="border border-gray-400 px-4 py-2">Idioma</th>
          <th className="border border-gray-400 px-4 py-2">Ações</th>
        </tr>
      </thead>
      <tbody>
     {countries.map(country => {
  console.log(country);
  return <TableResponse key={country.ccn3} country={country} />;
})}

      </tbody>
    </table>
  );
}
