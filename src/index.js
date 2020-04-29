import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import introspectionQueryResultData from "./fragementTypes.json";
import Auth from './Auth';

let auth= new Auth();

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  link: new HttpLink({
    // CMS URL HERE
       uri: "http://localhost/demo/graphql"
      //  uri: "https://************* */.co/******/graphql"

  }),
  cache
});
    ReactDOM.render(
      <ApolloProvider client={client}>
        <App {...auth}/>
      </ApolloProvider>,
      document.getElementById("root")
    );


// If you want your app to work offline and load faster, you can change
// unregister()  register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
