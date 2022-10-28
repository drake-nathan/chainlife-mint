import React, { useEffect, useState } from 'react';
import * as St from './Modals.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MarketsModal: React.FC<Props> = ({ setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.ModalContainer>
        <St.MsgDiv>
          <St.Text>Find Chainlife On</St.Text>
          <St.XButton src="/icons/x-icon-lg.svg" onClick={handleCloseModal} />
        </St.MsgDiv>
        <a
          href="https://testnets.opensea.io/collection/chainlife"
          target="_blank"
          rel="noreferrer"
        >
          <St.Button id="opensea">OPENSEA</St.Button>
        </a>
        <a
          href="https://goerli.looksrare.org/collections/0x04c9E99D134565eB0F0Fef07FB70741A5b615075"
          target="_blank"
          rel="noreferrer"
        >
          <St.Button>LOOKSRARE</St.Button>
        </a>
        <a
          href="https://goerli.x2y2.io/collection/0x04c9E99D134565eB0F0Fef07FB70741A5b615075/items"
          target="_blank"
          rel="noreferrer"
        >
          <St.Button>X2Y2</St.Button>
        </a>
      </St.ModalContainer>
    </>
  );
};

export default MarketsModal;
