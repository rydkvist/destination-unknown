import React from "react";

import { NextPage } from "next";
import { fetchSpecificCountry } from "../api/countries/countries";
import { Country } from "../api/countries/types";
import Link from "next/link";

interface Props {
  country: Country | null;
}

const Destination: NextPage<Props> = ({ country }: Props): JSX.Element => {
  return (
    <main>
      {country === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Country: {country?.name?.common}</h1>
          <Link href={"/"} passHref>
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-500 bg-white hover:bg-emerald-50">
              Go back
            </a>
          </Link>
        </>
      )}
    </main>
  );
};

Destination.getInitialProps = async ({ query }) => {
  let countryName = query.countryName;
  console.log("query", countryName);

  if (countryName === undefined) {
    return { country: null };
  }

  const country = await fetchSpecificCountry(countryName as string);
  return { country };
};

export default Destination;
