/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type React from "react";
import type { Contract } from "web3-eth-contract";

import {
  callPublicMint,
  callPublicMintTo,
  checkIfSupply,
  getMintPhase,
} from "services/web3/contractInteractions";

// mainnet
const urls = {
  etherscan: `https://etherscan.io/tx`,
  openSea: `https://opensea.io/assets/ethereum`,
};

export interface ISuccessInfo {
  etherscanLink: string;
  generatorUrl: string;
  openseaLink: string;
  tokenId: number;
  tokenPageUrl: string;
}

export const publicMint = async (
  contract: Contract,
  maxSupply: number,
  account: string,
  payableAmount: number,
  toAddress: string,
  handleError: (error: string) => void,
  setBuyButtonText: React.Dispatch<React.SetStateAction<string>>,
) => {
  const mintPhase = await getMintPhase(contract);
  if (mintPhase === "0" || mintPhase === "1") {
    handleError("PUBLIC MINT IS NOT ACTIVE");
    return;
  }

  const isSupplyRemaining = await checkIfSupply(contract, maxSupply);
  if (!isSupplyRemaining) {
    handleError("MINT HAS SOLD OUT");
    return;
  }

  const txObj = !toAddress
    ? await callPublicMint(contract, account, payableAmount)
    : await callPublicMintTo(contract, account, payableAmount, toAddress);
  if (!txObj) {
    handleError("MINT FAILED");
    return;
  }

  const txHash = txObj.transactionHash;
  if (!txHash) {
    handleError("MINT FAILED");
    return;
  }

  setBuyButtonText("MINTED");
  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;
  const contractAddress = txObj?.events?.Transfer?.address as string;

  const successInfo: ISuccessInfo = {
    etherscanLink: `${urls.etherscan}/${txHash}`,
    generatorUrl: `https://api.substratum.art/project/chainlife/generator/${tokenId}`,
    openseaLink: `${urls.openSea}/${contractAddress}/${tokenId}`,
    tokenId: parseInt(tokenId),
    tokenPageUrl: `https://chainlife.xyz/token/${tokenId}`,
  };

  return successInfo;
};

export const switchChain = async (chainId: string) => {
  await window.ethereum?.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId }],
  });
};
