import { CountryData } from "../Types/types";
import { getCountryData } from "./api";

export function mapApiDataToCountryData(apiData: CountryData): CountryData {
  return {
    name: apiData.name || '',
    translations: {
      por: {
        official: apiData.translations.por.official || '',
        common: apiData.translations.por.common || ''
      }
    },
    ccn3: apiData.ccn3 || '',
    capital: apiData.capital || [],
    population: apiData.population || 0,
    currencies: apiData.currencies || {},
    languages: apiData.languages || {},
    flags: {
      png: apiData.flags.png || '',
      svg: apiData.flags.svg || '',
      alt: apiData.flags.alt || ''
    },
    maps: {
      googleMaps: apiData.maps.googleMaps || '',
      openStreetMaps: apiData.maps.openStreetMaps || ''
    }
  };
}


export const fetchCountryData = async (name: string): Promise<CountryData | null> => {
  try {
    const response = await getCountryData(name);
    if (response && response.data) {
      console.log(response.data);
      const countryData = mapApiDataToCountryData(response.data[0]);
      return countryData;
    }
    return null;
  } catch (error) {
    console.error('Erro ao buscar dados do país:', error);
    return null;

  }
}

  export function removeAspas(url: string): string {
  return url.replace(/['"]+/g, '');
}

export function formatarPopulacao(populacao: number): string {
  return populacao.toLocaleString('pt-BR');
}



