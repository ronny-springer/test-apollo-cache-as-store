import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <p>Test Apollo Cache as Store</p>
          <Button />
          <br />
          <Display />
        </header>
      </div>
    </ApolloProvider>
  );
};

export default App;
