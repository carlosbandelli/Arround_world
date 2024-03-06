import React, { useState } from 'react';
import { getCountryData } from './Services/api';
import { Table } from './Components/Table';



export function App() {
  const [countryName, setCountryName] = useState('');
  const [displayType, setDisplayType] = useState<'table' | 'custom'>('table');
  const [searchHistory, setSearchHistory] = useState<CountryData[]>([]);

  const handleCountryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  const handleDisplayTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayType(event.target.value as 'table' | 'custom');
  };

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await getCountryData(countryName);
    console.log(response.data)
    setSearchHistory([...searchHistory, response.data]);
  } catch (error) {
    console.error('Erro ao buscar informações do país:', error.message);
  }
};


  return (
    <div className="py-10 space-y-8">
      <div>
        <header className="text-center text-3xl font-bold">Consulta de Informações de Países</header>
        <div className="flex justify-center space-x-5">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Tab 1</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Tab 2</button>
        </div>
      </div>
      <main className="max-w-6xl mx-auto space-y-5">
        <form onSubmit={handleSubmit} className="flex justify-center space-x-3">
          <input type="text" value={countryName} onChange={handleCountryNameChange} placeholder="Digite o nome do país" className="border border-gray-300 rounded-md px-4 py-2 text-black" />
          <select value={displayType} onChange={handleDisplayTypeChange} className="border border-gray-300 rounded-md px-4 py-2">
            <option value="table">Tabela</option>
            <option value="custom">Formato Diferente</option>
          </select>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Buscar</button>
        </form>
        <div>
          <h2 className="text-xl font-bold">Histórico de Consultas</h2>

          <Table countries={searchHistory} />

        </div>
      </main>
    </div>
  );
}
