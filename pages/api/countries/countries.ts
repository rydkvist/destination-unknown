import { Country } from "./types";

export const fetchCountries = async (): Promise<Country[]> => {
  return await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data: Country[]) => data);
};

export const fetchSpecificCountry = async (
  countryName: string
): Promise<Country> => {
  return await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res) => res.json())
    .then((data: Country[]) => {
      return data[0];
    });
};
