import React from 'react';
import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Main from './components/Main';

export const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache()
});

const CountriesApp = () => {

  return (
    <ApolloProvider client={client}>
      <main className="countries-app-container"> 
        <Main />
      </main>
    </ApolloProvider>
  )
}

export default CountriesApp;