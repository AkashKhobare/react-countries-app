import React, { useEffect, useState } from "react";

import "./Countries.css";
import { Country } from "./Country";
import { gql, useQuery } from "@apollo/client";

import { client } from '../CountriesApp'

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export const Countries = () => {

    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }
      
    return (
        <div>
            <div className="countries-container">
            {data.countries.map(country => (
                <Country key={country.code} country={country} />
            ))}
            </div>
        </div>
    )

}
