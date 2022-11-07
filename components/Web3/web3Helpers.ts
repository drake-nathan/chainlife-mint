import React from 'react';
import { Contract } from 'web3-eth-contract';
import {
  checkIfPublicMintActive,
  checkIfPresaleActive,
  checkIfSupply,
  callPublicMint,
  callPremint,
  callPublicMintTo,
  checkIfEnsoUsed,
  checkIfFocusUsed,
} from 'services/web3/contractInteractions';

// mainnet urls
// const urls = {
//   openSea: `https://opensea.io/assets/ethereum/`,
//   etherscan: `https://etherscan.io/tx/`,
// };

//goerli urls
const urls = {
  openSea: `https://testnets.opensea.io/assets/goerli`,
  etherscan: `https://goerli.etherscan.io/tx/`,
};

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
  handleSuccess: (successInfo: ISuccessInfo) => void,
  setBuyButtonText: React.Dispatch<React.SetStateAction<string>>,
  setShowBuyModal: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const isPresaleActive = await checkIfPresaleActive(contract);
  if (!isPresaleActive) return handleError('MINT IS NOT ACTIVE');

  const checkIfZenTokenUsed = projectNumber === 34 ? checkIfEnsoUsed : checkIfFocusUsed;
  const isZenTokenUsed = await checkIfZenTokenUsed(contract, tokenNumber);
  if (isZenTokenUsed) return handleError('ZEN TOKEN ALREADY USED');

  // TODO: Turn this on
  // const isSupplyRemaining = await checkIfSupply(contract, maxSupply);
  // if (!isSupplyRemaining) return handleError('MINT HAS SOLD OUT');

  const txObj = await callPremint(
    contract,
    account,
    payableAmount,
    projectNumber,
    tokenNumber,
  );
  if (!txObj) return handleError('MINT FAILED');
  console.info('txObj', txObj);

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('MINT FAILED');

  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;
  const contractAddress = txObj?.events?.Transfer?.address as string;

  setBuyButtonText('MINTED');

  const successInfo: ISuccessInfo = {
    tokenId: parseInt(tokenId),
    etherscanLink: `${urls.etherscan}/${txHash}`,
    openseaLink: `${urls.openSea}/${contractAddress}/${tokenId}`,
    // NOTE: change this to mainnet
    generatorUrl: `https://api.gengames.io/project/chainlife-testnet/generator/${tokenId}`,
    tokenPageUrl: `https://chainlife.xyz/token/${tokenId}`,
  };

  handleSuccess(successInfo);
};

export const publicMint = async (
  contract: Contract,
  maxSupply: number,
  account: string,
  payableAmount: number,
  toAddress: string,
  handleError: (error: string) => void,
  handleSuccess: (successInfo: ISuccessInfo) => void,
  setBuyButtonText: React.Dispatch<React.SetStateAction<string>>,
  setShowBuyModal: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const isMintActive = await checkIfPublicMintActive(contract);
  if (!isMintActive) return handleError('MINT IS NOT ACTIVE');

  // TODO: Turn this on
  // const isSupplyRemaining = await checkIfSupply(contract, maxSupply);
  // if (!isSupplyRemaining) return handleError('MINT HAS SOLD OUT');

  const txObj = !toAddress
    ? await callPublicMint(contract, account, payableAmount)
    : await callPublicMintTo(contract, account, payableAmount, toAddress);
  if (!txObj) return handleError('MINT FAILED');

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('MINT FAILED');

  setBuyButtonText('MINTED');
  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;
  const contractAddress = txObj?.events?.Transfer?.address as string;

  const successInfo: ISuccessInfo = {
    tokenId: parseInt(tokenId),
    etherscanLink: `${urls.etherscan}/${txHash}`,
    openseaLink: `${urls.openSea}/${contractAddress}/${tokenId}`,
    // NOTE: change this to mainnet
    generatorUrl: `https://api.gengames.io/project/chainlife-testnet/generator/${tokenId}`,
    tokenPageUrl: `https://chainlife.xyz/token/${tokenId}`,
  };

  setShowBuyModal(false);
  handleSuccess(successInfo);
};

export const switchChain = async (chainId: string) => {
  await window.ethereum?.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId }],
  });
};
