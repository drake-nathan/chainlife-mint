import React from 'react';
import ThemeProvider from './ThemeProvider';
import Web3Provider from './Web3Provider';
import { ApolloProvider } from '@apollo/client';
import { client } from 'services/apollo/client';
import { QueryClient, QueryClientProvider } from 'react-query';

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
