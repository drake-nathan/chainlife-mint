import React from 'react';
import { IoCaretUpCircleOutline } from 'react-icons/io5';
import * as St from './MarketsDropDown.styled';

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
        <IoCaretUpCircleOutline className="up-arrow" onClick={handleCloseModal} />
        <a
          href="https://opensea.io/collection/chainlife-by-matto"
          target="_blank"
          rel="noreferrer"
        >
          <St.Button id="opensea">OPENSEA</St.Button>
        </a>
      </St.TopButtonContainer>
      <a
        href="https://looksrare.org/collections/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429"
        target="_blank"
        rel="noreferrer"
      >
        <St.Button>LOOKSRARE</St.Button>
      </a>
      <a
        href="https://x2y2.io/collection/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429/items"
        target="_blank"
        rel="noreferrer"
      >
        <St.Button>X2Y2</St.Button>
      </a>
      <a href="https://artacle.io/project/chainlife" target="_blank" rel="noreferrer">
        <St.Button id="coinbase">ARTACLE</St.Button>
      </a>
      <a
        href="https://etherscan.io/address/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429#code"
        target="_blank"
        rel="noreferrer"
      >
        <St.Button id="coinbase">ETHERSCAN</St.Button>
      </a>
    </St.DropDownContainer>
  );
};

export default MarketsDropDown;
