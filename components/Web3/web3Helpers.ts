import React from "react";
import { Contract } from "web3-eth-contract";
import {
  getMintPhase,
  checkIfPresaleActive,
  checkIfSupply,
  callPublicMint,
  callPremint,
  callPublicMintTo,
  checkIfEnsoUsed,
  checkIfFocusUsed,
} from "services/web3/contractInteractions";
import { UserZenTokens } from "types/premintTypes";

// mainnet
const urls = {
  openSea: `https://opensea.io/assets/ethereum`,
  etherscan: `https://etherscan.io/tx`,
};

//goerli
// const urls = {
//   openSea: `https://testnets.opensea.io/assets/goerli`,
//   etherscan: `https://goerli.etherscan.io/tx`,
// };

export interface ISuccessInfo {
  tokenId: number;
  etherscanLink: string;
  openseaLink: string;
  generatorUrl: string;
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
  if (!isPresaleActive) return handleError("MINT IS NOT ACTIVE");

  const checkIfZenTokenUsed =
    projectNumber === 34 ? checkIfEnsoUsed : checkIfFocusUsed;
  const isZenTokenUsed = await checkIfZenTokenUsed(contract, tokenNumber);
  if (isZenTokenUsed) return handleError("ZEN TOKEN ALREADY USED");

  const isSupplyRemaining = await checkIfSupply(contract, maxSupply);
  if (!isSupplyRemaining) return handleError("MINT HAS SOLD OUT");

  const txObj = await callPremint(
    contract,
    account,
    payableAmount,
    projectNumber,
    tokenNumber,
  );
  if (!txObj) return handleError("MINT FAILED");
  console.info("txObj", txObj);

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError("MINT FAILED");

  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;
  const contractAddress = txObj?.events?.Transfer?.address as string;

  setBuyButtonText("MINTED");

  const successInfo: ISuccessInfo = {
    tokenId: parseInt(tokenId),
    etherscanLink: `${urls.etherscan}/${txHash}`,
    openseaLink: `${urls.openSea}/${contractAddress}/${tokenId}`,
    generatorUrl: `https://api.substratum.art/project/chainlife/generator/${tokenId}`,
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
  if (mintPhase === "0" || mintPhase === "1")
    return handleError("PUBLIC MINT IS NOT ACTIVE");

  const isSupplyRemaining = await checkIfSupply(contract, maxSupply);
  if (!isSupplyRemaining) return handleError("MINT HAS SOLD OUT");

  const txObj = !toAddress
    ? await callPublicMint(contract, account, payableAmount)
    : await callPublicMintTo(contract, account, payableAmount, toAddress);
  if (!txObj) return handleError("MINT FAILED");

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError("MINT FAILED");

  setBuyButtonText("MINTED");
  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;
  const contractAddress = txObj?.events?.Transfer?.address as string;

  const successInfo: ISuccessInfo = {
    tokenId: parseInt(tokenId),
    etherscanLink: `${urls.etherscan}/${txHash}`,
    openseaLink: `${urls.openSea}/${contractAddress}/${tokenId}`,
    generatorUrl: `https://api.substratum.art/project/chainlife/generator/${tokenId}`,
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
