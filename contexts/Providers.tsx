import React from 'react';
import ThemeProvider from './ThemeProvider';
import Web3Provider from './Web3Provider';
import { MintPageProvider } from './MintPageContext';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <Web3Provider>
      <MintPageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </MintPageProvider>
    </Web3Provider>
  );
};

export default Providers;
