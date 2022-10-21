import { useMintDetails } from 'hooks/useMintDetails';
import React, { createContext, useEffect, useState } from 'react';

export enum MintPage {
  Premint = 'Premint',
  Mint = 'Mint',
  Success = 'Success',
}

interface IMintPageContext {
  mintPage?: MintPage;
  setMintPage?: (mintPage: MintPage) => void;
}

export const MintPageContext = createContext<IMintPageContext>({});

interface Props {
  children: React.ReactNode;
}

export const MintPageProvider: React.FC<Props> = ({ children }) => {
  const { isPreMint } = useMintDetails();

  const [mintPage, setMintPage] = useState<MintPage>(MintPage.Mint);

  useEffect(() => {
    if (isPreMint) {
      setMintPage(MintPage.Premint);
    }
  }, [isPreMint]);

  return (
    <MintPageContext.Provider value={{ mintPage, setMintPage }}>
      {children}
    </MintPageContext.Provider>
  );
};
