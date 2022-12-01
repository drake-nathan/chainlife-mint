import { AbiItem } from 'web3-utils';
import goerliAbi from 'services/web3/abi/ChainlifeGoerli.abi.json';
import mainnetAbi from 'services/web3/abi/ChainlifeMainnet.abi.json';
import { useWeb3 } from './useWeb3';
import { useChain } from './useChain';
import { Chain } from 'services/azureApi/types';

export const useContract = () => {
  const { chainId } = useChain();
  const web3 = useWeb3();

  const contractAddress = {
    [Chain.mainnet]: '0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429',
    [Chain.goerli]: '0x04c9E99D134565eB0F0Fef07FB70741A5b615075',
  };

  const abi = {
    [Chain.mainnet]: mainnetAbi as AbiItem[],
    [Chain.goerli]: goerliAbi as AbiItem[],
  };

  const contract = new web3.eth.Contract(
    abi[chainId],
    contractAddress[chainId].toLowerCase(),
  );

  return {
    address: contractAddress,
    contract,
  };
};
