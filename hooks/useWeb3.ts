import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { Chain } from 'services/azureApi/types';

export const useWeb3 = () => {
  const rpc = {
    [Chain.mainnet]: process.env.NEXT_PUBLIC_RPC_URL_1 as string,
    [Chain.goerli]: process.env.NEXT_PUBLIC_RPC_URL_5 as string,
  };

  const { active, library } = useWeb3React();

  // TODO: Change this back to mainnet
  const web3Provider = new Web3.providers.HttpProvider(rpc[Chain.goerli]);

  const [web3, setWeb3] = useState<Web3>(new Web3(web3Provider));

  useEffect(() => {
    if (active && library) {
      setWeb3(new Web3(library));
    } else {
      setWeb3(new Web3(web3Provider));
    }
  }, [active]);

  return web3;
};
