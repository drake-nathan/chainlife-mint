import React from "react";
import { IoCaretUpCircleOutline } from "react-icons/io5";

import * as St from "./MarketsDropDown.styled";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MarketsDropDown: React.FC<Props> = ({ setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <St.DropDownContainer>
      <St.TopButtonContainer>
        <IoCaretUpCircleOutline
          className="up-arrow"
          onClick={handleCloseModal}
        />
        <a href="https://matto.xyz/" rel="noreferrer" target="_blank">
          <St.Button id="opensea">ARTIST</St.Button>
        </a>
      </St.TopButtonContainer>
      <a
        href="https://opensea.io/collection/chainlife-by-matto"
        rel="noreferrer"
        target="_blank"
      >
        <St.Button>OPENSEA</St.Button>
      </a>
      <a
        href="https://looksrare.org/collections/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429"
        rel="noreferrer"
        target="_blank"
      >
        <St.Button>LOOKSRARE</St.Button>
      </a>
      <a
        href="https://x2y2.io/collection/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429/items"
        rel="noreferrer"
        target="_blank"
      >
        <St.Button>X2Y2</St.Button>
      </a>
      <a
        href="https://artacle.io/project/chainlife"
        rel="noreferrer"
        target="_blank"
      >
        <St.Button id="coinbase">ARTACLE</St.Button>
      </a>
      <a
        href="https://etherscan.io/address/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429#code"
        rel="noreferrer"
        target="_blank"
      >
        <St.Button id="coinbase">ETHERSCAN</St.Button>
      </a>
    </St.DropDownContainer>
  );
};

export default MarketsDropDown;
