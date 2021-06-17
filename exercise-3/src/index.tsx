import React from "react";
import ReactDOM from 'react-dom';
import Home from './components/Home';


import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
    } from "@apollo/client";
  
    

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
});

const App:React.FC = ( ) => (
    <>
        <Home/>
    </>
);


ReactDOM.render(<ApolloProvider client={client}><App /> </ApolloProvider>, document.getElementById("root"));