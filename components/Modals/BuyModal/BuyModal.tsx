import React, { useState } from "react";
import { useMintDetails } from "hooks/useMintDetails";
import { isAddress } from "web3-utils";
import * as St from "./BuyModal.styled";

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
            type="text"
            placeholder="Paste optional wallet addres to mint to"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value.toLowerCase())}
          />
        )}
      </St.BuyModalContainer>
    </>
  );
};

export default BuyModal;
