import { AbiItem } from 'web3-utils';
import goerliAbi from 'services/web3/abi/ChainlifeGoerli.abi.json';
import mainnetAbi from 'services/web3/abi/ChainlifeMainnet.abi.json';
import { useWeb3 } from './useWeb3';

export const useContract = () => {
  const web3 = useWeb3();
  const address = {
    mainnet: '0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429',
    goerli: '0x04c9E99D134565eB0F0Fef07FB70741A5b615075',
  };

  const mainnetContract = new web3.eth.Contract(
    mainnetAbi as AbiItem[],
    address.mainnet.toLowerCase(),
  );

  const goerliContract = new web3.eth.Contract(
    goerliAbi as AbiItem[],
    address.goerli.toLowerCase(),
  );

  return {
    address,
    contract: {
      mainnet: mainnetContract,
      goerli: goerliContract,
    },
  };
};
