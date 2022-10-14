import React, { useState } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './Modals.styled';
import { toWei } from 'web3-utils';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleCryptoMint: () => void;
  handleError: (error: string) => void;
  buyButtonText: string;
}

const BuyModal: React.FC<Props> = ({
  setShowModal,
  handleCryptoMint,
  buyButtonText,
}) => {
  const { mintPrice } = useMintDetails();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.BuyModalBackground onClick={handleCloseModal} />
      <St.BuyModalContainer>
        <St.UnitDiv>
          <St.UnitText style={{ color: '#fff', fontWeight: 500 }}>
            PRICE:{' '}
            <St.UnitText style={{ marginLeft: '0.25em' }}>
              {mintPrice}(ETH)
            </St.UnitText>
          </St.UnitText>
        </St.UnitDiv>

        <St.Button onClick={() => handleCryptoMint()}>
          {buyButtonText}
        </St.Button>
      </St.BuyModalContainer>
    </>
  );
};

export default BuyModal;
