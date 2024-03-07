import React, { useState } from 'react';
import { Table } from './Components/Table';
import { fetchCountryData } from './Services/functions';
import { CountryData } from './Types/types';
import { Header } from './Components/Header';
import { Title } from './Components/Title';
import { Form } from './Components/Form';



export function App() {
  const [countryName, setCountryName] = useState('');
  const [searchHistory, setSearchHistory] = useState<CountryData[]>([]);

  const handleCountryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await fetchCountryData(countryName);
    if (response) {
      console.log(response);
      setSearchHistory([...searchHistory, response]);
    } else {
      console.error('Erro ao buscar informações do país: a resposta está vazia.');
    }
  } catch (error) {
    console.error('Erro ao buscar informações do país:', error.message);
  }
};

  return (
    <div className="py-10 space-y-8">
      <Header title="Consulta de Informações de Países"/>
      <main className="max-w-6xl mx-auto space-y-5">
        <Form onSubmit={handleSubmit}>
          <input type="text" value={countryName} onChange={handleCountryNameChange} placeholder="Digite o nome do país" className="border border-gray-300 rounded-md px-4 py-2 text-black" />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Buscar</button>
        </Form>
        <div>
          <Title level="h2" title="Histórico de Consultas" />
          <Table countries={searchHistory} />
        </div>
      </main>
    </div>
  );
}
