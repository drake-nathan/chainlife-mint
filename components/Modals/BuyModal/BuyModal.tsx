import React, { useState } from "react";
import { isAddress } from "web3-utils";

import * as St from "./BuyModal.styled";
import { useMintDetails } from "hooks/useMintDetails";

interface Props {
  buyButtonText: string;
  handleError: (error: string) => void;
  handlePublicMint: (toAddress?: string) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuyModal: React.FC<Props> = ({
  buyButtonText,
  handleError,
  handlePublicMint,
  setShowModal,
}) => {
  const { mintPrice } = useMintDetails();

  const [toAddress, setToAddress] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleMintClick = () => {
    const isAddressValid = isAddress(toAddress);
    if (toAddress && !isAddressValid) {
      handleError("Invalid 'to' address.");
    } else {
      handlePublicMint(toAddress);
    }
  };

  const handleDropdownClick = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
      setToAddress("");
    } else {
      setIsDropdownOpen(true);
    }
  };

  return (
    <>
      <St.BuyModalBackground onClick={handleCloseModal} />
      <St.BuyModalContainer>
        <St.Title>Chainlife</St.Title>
        <St.Text>PRICE: {mintPrice} ETH</St.Text>
        <St.Button onClick={handleMintClick}>{buyButtonText}</St.Button>
        <St.Row>
          <St.Text>Mint to a different wallet?</St.Text>
          <St.DropDownIcon
            isDropdownOpen={isDropdownOpen}
            onClick={handleDropdownClick}
          />
        </St.Row>
        {isDropdownOpen && (
          <St.Input
            onChange={(e) => setToAddress(e.target.value.toLowerCase())}
            placeholder="Paste optional wallet addres to mint to"
            type="text"
            value={toAddress}
          />
        )}
      </St.BuyModalContainer>
    </>
  );
};

export default BuyModal;
