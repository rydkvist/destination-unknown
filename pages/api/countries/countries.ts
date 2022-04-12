import { Country } from "./types";

export const COUNTRIES_API_ENDPOINT = "https://restcountries.com/v3.1";

export const fetchCountries = async (): Promise<Country[]> => {
  return await fetch(COUNTRIES_API_ENDPOINT + "/all")
    .then((res) => res.json())
    .then((data: Country[]) => data);
};

export const fetchSpecificCountry = async (
  countryName: string
): Promise<Country> => {
  return await fetch(COUNTRIES_API_ENDPOINT + `/name/${countryName}`)
    .then((res) => res.json())
    .then((data: Country[]) => {
      return data[0];
    });
};
