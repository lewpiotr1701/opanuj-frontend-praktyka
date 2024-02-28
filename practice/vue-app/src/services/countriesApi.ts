import { TFilterOptions } from '../interfaces/countries';

export const fetchAllCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
}

export const fetchCountriesByParam = async (filter: TFilterOptions, searchString: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/${filter}/${searchString}`);
  const data = await response.json();
  return data;  
}