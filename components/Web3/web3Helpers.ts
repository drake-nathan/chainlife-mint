/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type React from "react";
import type { UserZenTokens } from "types/premintTypes";
import type { Contract } from "web3-eth-contract";

import {
  callPremint,
  callPublicMint,
  callPublicMintTo,
  checkIfEnsoUsed,
  checkIfFocusUsed,
  checkIfPresaleActive,
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

export const presaleMint = async (
  contract: Contract,
  maxSupply: number,
  account: string,
  payableAmount: number,
  projectNumber: number,
  tokenNumber: number,
  handleError: (error: string) => void,
  setBuyButtonText: React.Dispatch<React.SetStateAction<string>>,
) => {
  const isPresaleActive = await checkIfPresaleActive(contract);
  if (!isPresaleActive) {
    handleError("MINT IS NOT ACTIVE");
    return;
  }

  const checkIfZenTokenUsed =
    projectNumber === 34 ? checkIfEnsoUsed : checkIfFocusUsed;
  const isZenTokenUsed = await checkIfZenTokenUsed(contract, tokenNumber);
  if (isZenTokenUsed) {
    handleError("ZEN TOKEN ALREADY USED");
    return;
  }

  const isSupplyRemaining = await checkIfSupply(contract, maxSupply);
  if (!isSupplyRemaining) {
    handleError("MINT HAS SOLD OUT");
    return;
  }

  const txObj = await callPremint(
    contract,
    account,
    payableAmount,
    projectNumber,
    tokenNumber,
  );
  if (!txObj) {
    handleError("MINT FAILED");
    return;
  }
  console.info("txObj", txObj);

  const txHash = txObj.transactionHash;
  if (!txHash) {
    handleError("MINT FAILED");
    return;
  }

  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;
  const contractAddress = txObj?.events?.Transfer?.address as string;

  setBuyButtonText("MINTED");

  const successInfo: ISuccessInfo = {
    etherscanLink: `${urls.etherscan}/${txHash}`,
    generatorUrl: `https://api.substratum.art/project/chainlife/generator/${tokenId}`,
    openseaLink: `${urls.openSea}/${contractAddress}/${tokenId}`,
    tokenId: parseInt(tokenId),
    tokenPageUrl: `https://chainlife.xyz/token/${tokenId}`,
  };

  return successInfo;
};

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

export const filterUserTokens = async (
  contract: Contract,
  usersTokens: UserZenTokens,
): Promise<UserZenTokens> => {
  const { enso, focus } = usersTokens;

  const ensoUsedValues = await Promise.all(
    enso.map(async (token) => {
      const ensoUsed = await checkIfEnsoUsed(contract, token);
      return !ensoUsed;
    }),
  );
  const ensoFiltered = enso.filter((_, i) => ensoUsedValues[i]);

  const focusUsedValues = await Promise.all(
    focus.map(async (token) => {
      const focusUsed = await checkIfFocusUsed(contract, token);
      return !focusUsed;
    }),
  );
  const focusFiltered = focus.filter((_, i) => focusUsedValues[i]);

  return { enso: ensoFiltered, focus: focusFiltered };
};
