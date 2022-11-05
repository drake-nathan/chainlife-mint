import React from 'react';
import { Contract } from 'web3-eth-contract';
import {
  checkIfMintActive,
  checkIfPresaleActive,
  checkIfSupply,
  callPublicMint,
  callPremint,
  callPublicMintTo,
} from 'services/web3/contractInteractions';

// mainnet urls
const urls = {
  //  openSea: `https://opensea.io/assets/ethereum/`,
  etherscan: `https://etherscan.io/tx/`,
};

//rinkeby urls
// const urls = {
//   // openSea: `https://testnets.opensea.io/assets/rinkeby/`,
//   etherscan: `https://rinkeby.etherscan.io/tx/`,
// };

export interface ISuccessInfo {
  message: string;
  // openseaLink: string;
  etherscanLink: string;
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

  const isSupplyRemaining = await checkIfSupply(contract, maxSupply);
  if (!isSupplyRemaining) return handleError('MINT HAS SOLD OUT');

  setBuyButtonText('MINTING...');
  const txObj = await callPremint(
    contract,
    account,
    payableAmount,
    projectNumber,
    tokenNumber,
  );
  if (!txObj) return handleError('MINT FAILED');

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('MINT FAILED');

  setBuyButtonText('MINTED');

  const successInfo: ISuccessInfo = {
    message: `SUCCESSFULLY MINTED NFT`,
    etherscanLink: `${urls.etherscan}${txHash}`,
  };

  setShowBuyModal(false);
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
  const isMintActive = await checkIfMintActive(contract);
  if (!isMintActive) return handleError('MINT IS NOT ACTIVE');

  const isSupplyRemaining = await checkIfSupply(contract, maxSupply);
  if (!isSupplyRemaining) return handleError('MINT HAS SOLD OUT');

  setBuyButtonText('MINTING...');
  const txObj = !toAddress
    ? await callPublicMint(contract, account, payableAmount)
    : await callPublicMintTo(contract, account, payableAmount, toAddress);
  if (!txObj) return handleError('MINT FAILED');

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('MINT FAILED');

  setBuyButtonText('MINTED');
  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;

  const successInfo: ISuccessInfo = {
    message: `SUCCESSFULLY MINTED NFT`,
    etherscanLink: `${urls.etherscan}${txHash}`,
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
