import { AbiItem } from 'web3-utils';
import storefrontAbi from '../web3/Chainlife.abi.json';
import { useWeb3 } from './useWeb3';

export const useContract = () => {
  const web3 = useWeb3();
  const goerliContractAddress = '0x04c9E99D134565eB0F0Fef07FB70741A5b615075';

  const goerliContract = new web3.eth.Contract(
    storefrontAbi as AbiItem[],
    goerliContractAddress.toLowerCase(),
  );

  // TODO: Think through how to handle multiple contracts

  return {
    goerliContract,
    goerliContractAddress,
  };
};
