import React, { useState } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './Modals.styled';
import { toWei } from 'web3-utils';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleCryptoMint: (quantity: number) => void;
  handleError: (error: string) => void;
  buyButtonText: string;
}

const BuyModal: React.FC<Props> = ({
  setShowModal,
  handleCryptoMint,
  buyButtonText,
}) => {
  const { mintPrice, maxMint, discountPrice } = useMintDetails();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(mintPrice.toFixed(2));

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const minMint = 1;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= minMint && newQuantity <= maxMint) {
      setQuantity(newQuantity);
      setTotal((newQuantity * mintPrice).toFixed(2));
    }
  };

  return (
    <>
      <St.BuyModalBackground onClick={handleCloseModal} />
      <St.BuyModalContainer>
        <St.MsgDiv style={{ justifyContent: 'center' }}>
          <St.Text>CHOOSE QUANTITY</St.Text>
        </St.MsgDiv>
        <St.UnitDiv>
          <St.SubtleText>MAX: {maxMint}</St.SubtleText>
        </St.UnitDiv>
        <St.UnitDiv>
          <St.UnitText style={{ color: '#fff', fontWeight: 500 }}>
            TOTAL:{' '}
            <St.UnitText style={{ marginLeft: '0.25em' }}>
              {total}(ETH)
            </St.UnitText>
          </St.UnitText>
        </St.UnitDiv>

        <St.Button onClick={() => handleCryptoMint(quantity)}>
          {buyButtonText}
        </St.Button>
      </St.BuyModalContainer>
    </>
  );
};

export default BuyModal;
