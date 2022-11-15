import React, { useState } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './BuyModal.styled';
import { isAddress } from 'web3-utils';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handlePublicMint: (toAddress?: string) => void;
  handleError: (error: string) => void;
  buyButtonText: string;
}

const BuyModal: React.FC<Props> = ({
  setShowModal,
  handlePublicMint,
  handleError,
  buyButtonText,
}) => {
  const { mintPrice } = useMintDetails();

  const [toAddress, setToAddress] = useState('');

  const handleCloseModal = () => setShowModal(false);

  const handleMintClick = () => {
    const isAddressValid = isAddress(toAddress);
    if (toAddress && !isAddressValid) {
      handleError("Invalid 'to' address.");
    } else {
      handlePublicMint(toAddress);
    }
  };

  return (
    <>
      <St.BuyModalBackground onClick={handleCloseModal} />
      <St.BuyModalContainer>
        <St.Title>CHAINLIFE MINT</St.Title>
        <St.Text>PRICE: {mintPrice} ETH</St.Text>
        <St.Button onClick={handleMintClick}>{buyButtonText}</St.Button>
        <St.Input
          type="text"
          placeholder="Optional 'to' address"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value.toLowerCase())}
        />
        <St.SubtleText>Will mint to connected wallet if left blank</St.SubtleText>
      </St.BuyModalContainer>
    </>
  );
};

export default BuyModal;
