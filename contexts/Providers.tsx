import { ApolloProvider } from "@apollo/client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import ThemeProvider from "./ThemeProvider";
import Web3Provider from "./Web3Provider";
import { client } from "services/apollo/client";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <Web3Provider>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </Web3Provider>
  );
};

export default Providers;
