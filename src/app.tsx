import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


import { fetchCountryData, generateCountryNameVariants, normalizeCountryName } from './Services/functions';
import { Table } from './Components/Table';
import { CountryData } from './Types/types';
import { Header } from './Components/Header';
import { Title } from './Components/Title';
import { Form } from './Components/Form';
import { Loading } from './Components/Loading';
import { Input } from './Components/Input';
import { Button } from './Components/Button';


export function App() {
  const [countryName, setCountryName] = useState('');
  const [searchHistory, setSearchHistory] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [offline, setOffline] = useState(false);



  const handleCountryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  const openGoogleMapsLink = (link: string) => {
    window.open(link, '_blank');
  };

const handleExecuteAgain = async (countryName: string) => {
  try {
    setLoading(true);
    setApiError(false);
    const normalizedCountryName = normalizeCountryName(countryName);
    const countryNameVariants = generateCountryNameVariants(normalizedCountryName);

    let countryToAdd: CountryData | null = null;

    for (const variant of countryNameVariants) {
      const response = await fetchCountryData(variant);
      if (response) {
        countryToAdd = response;
        break;
      }
    }

    if (countryToAdd) {
      const newCountry = { ...countryToAdd, id: uuidv4() };

      setSearchHistory(prevSearchHistory => [...prevSearchHistory, newCountry]);
    }
  } catch (error) {
    console.error('Erro ao buscar informações do país:', error.message);
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
        console.error('Erro: País não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar informações do país:', error.message);
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
        </Form>
        <div>
          <Title level="h2" title="Histórico de Consultas" />
          {loading ? <Loading iconName='Loader' iconSize={50}/> : (offline ? <p>Você está offline. Por favor, verifique sua conexão com a internet.</p> : (apiError ? <p>A API não está respondendo. Tente novamente mais tarde.</p> : <Table countries={searchHistory} onExecuteAgain={handleExecuteAgain} openGoogleMapsLink={openGoogleMapsLink} />))}
        </div>
      </main>
    </div>
  );
}
