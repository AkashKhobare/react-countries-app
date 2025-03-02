import { gql, useQuery } from "@apollo/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useRoutes } from "react-router-dom";
import { client } from "../CountriesApp";

const COUNTRY_DETAILS= gql`
    query fetchCountryDetails($code: ID!) {
        country(code: $code) {
          name
          code
          emoji
        }
    }
`;

export const CountryDetails = () => {

    const { countryCode } = useParams();

    const {data, loading, error} =  useQuery(COUNTRY_DETAILS, 
        { variables: { code: countryCode }})

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return (
        <div>{
         data.countries.map(country => {
            <p key={country.code}>{country.code}</p>
         })   
        }</div>
    )
}
