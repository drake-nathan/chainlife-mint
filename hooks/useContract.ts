import type { AbiItem } from "web3-utils";

import { useChain } from "./useChain";
import { useWeb3 } from "./useWeb3";
import { Chain } from "services/azureApi/types";
import goerliAbi from "services/web3/abi/ChainlifeGoerli.abi.json";
import mainnetAbi from "services/web3/abi/ChainlifeMainnet.abi.json";

export const useContract = () => {
  const { chainId } = useChain();
  const web3 = useWeb3();

  const contractAddress = {
    [Chain.goerli]: "0x04c9E99D134565eB0F0Fef07FB70741A5b615075",
    [Chain.mainnet]: "0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429",
  };

  const abi = {
    [Chain.goerli]: goerliAbi as AbiItem[],
    [Chain.mainnet]: mainnetAbi as AbiItem[],
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
