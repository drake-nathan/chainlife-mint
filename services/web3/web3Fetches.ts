import { Contract } from 'web3-eth-contract';
import { toWei } from 'web3-utils';

export const checkIfMintActive = async (contract: Contract) => {
  const mintStage = (await contract.methods.mintStage().call()) as number;

  return mintStage === 2;
};

export const checkIfPresaleActive = async (contract: Contract) => {
  const mintStage = (await contract.methods.mintStage().call()) as number;

  return mintStage === 1;
};

export const fetchCurrentSupply = async (contract: Contract) => {
  const currentSupply = (await contract.methods.totalSupply().call()) as number;

  return currentSupply;
};

export const checkIfSupply = async (contract: Contract, maxSupply: number) => {
  const currentSupply = (await contract.methods.totalSupply().call()) as number;

  return currentSupply < maxSupply;
};

export const getOwner = async (contract: Contract, tokenId: number | string) => {
  const owner = (await contract.methods.ownerOf(tokenId).call()) as string;

  return owner;
};

export const callPremint = async (
  contract: Contract,
  account: string,
  payableAmount: number,
  projectNumber: number,
  tokenNumber: number,
) => {
  return await contract.methods
    .PREMINT(projectNumber, tokenNumber)
    .send({ from: account, value: toWei(payableAmount.toString(), 'ether') });
};

export const callPublicMint = async (
  contract: Contract,
  account: string,
  payableAmount: number,
) => {
  return await contract.methods
    .MINT()
    .send({ from: account, value: toWei(payableAmount.toString(), 'ether') });
};

export const callPublicMintTo = async (
  contract: Contract,
  account: string,
  payableAmount: number,
  toAddress: string,
) => {
  return await contract.methods
    .MINT_TO_ADDRESS(toAddress)
    .send({ from: account, value: toWei(payableAmount.toString(), 'ether') });
};

export const callCustomRule = async (
  contract: Contract,
  account: string,
  tokenId: number,
  rule: string,
) => {
  return await contract.methods.CUSTOM_RULE(tokenId, rule || ' ').send({ from: account });
};

export const callShiftLevels = async (
  contract: Contract,
  account: string,
  tokenId: number,
  levelShift: number,
  shiftFee: number,
) => {
  const payableAmount = (
    levelShift < 0 ? shiftFee * (levelShift * -1) : shiftFee * levelShift
  ).toFixed(3);
  const value = toWei(payableAmount.toString(), 'ether');

  return await contract.methods
    .SHIFT_LEVEL(tokenId, levelShift)
    .send({ from: account, value });
};