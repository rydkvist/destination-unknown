import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchCountries } from "../pages/api/countries/countries";
import { Country } from "../pages/api/countries/types";

interface ContextProps {
  countries: Country[];
  randomCountry: Country | undefined;
  updateRandomCountry: () => void;
}

const DestinationsContext = createContext<ContextProps>({
  countries: [],
  randomCountry: undefined,
  updateRandomCountry: () => {},
});

interface Props {
  children: ReactNode;
}

export const DestinationsProvider: FC<Props> = ({ children }) => {
  // TODO: Use React Query
  const [countries, setCountries] = useState<ContextProps["countries"]>([]);
  const [randomCountry, setRandomCountry] =
    useState<ContextProps["randomCountry"]>(undefined);

  const updateRandomCountry: ContextProps["updateRandomCountry"] =
    useCallback(() => {
      const randomIndex = Math.floor(Math.random() * countries.length);
      setRandomCountry(countries[randomIndex]);
    }, [countries]);

  useEffect(() => {
    if (countries.length === 0) {
      fetchCountries()
        .then(setCountries)
        .catch((err) => {
          console.log(err);
        });
    }
  }, [countries, updateRandomCountry]);

  useEffect(() => {
    if (randomCountry === undefined) {
      updateRandomCountry();
    }
  }, [countries, randomCountry, updateRandomCountry]);

  return (
    <DestinationsContext.Provider
      value={{
        countries,
        randomCountry,
        updateRandomCountry,
      }}
    >
      {children}
    </DestinationsContext.Provider>
  );
};

export const useDestinationsContext = (): ContextProps =>
  useContext(DestinationsContext);
