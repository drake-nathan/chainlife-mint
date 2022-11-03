import React from 'react';
import ThemeProvider from './ThemeProvider';
import Web3Provider from './Web3Provider';
import { MintPageProvider } from './MintPageContext';
import { ApolloProvider } from '@apollo/client';
import { client } from 'services/apollo/client';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <Web3Provider>
      <ApolloProvider client={client}>
        <MintPageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </MintPageProvider>
      </ApolloProvider>
    </Web3Provider>
  );
};

export default Providers;
