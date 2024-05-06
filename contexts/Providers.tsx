import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import ThemeProvider from "./ThemeProvider";
import Web3Provider from "./Web3Provider";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <Web3Provider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </Web3Provider>
  );
};

export default Providers;
