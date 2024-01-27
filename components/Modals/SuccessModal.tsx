import React from "react";

import type { ISuccessInfo } from "components/Web3/web3Helpers";

import * as St from "./Modals.styled";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  successInfo: ISuccessInfo;
}

const SuccessModal: React.FC<Props> = ({ setShowModal, successInfo }) => {
  const { etherscanLink, generatorUrl, openseaLink, tokenId, tokenPageUrl } =
    successInfo;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.SuccessModalContainer>
        <St.SuccessSection>
          <St.SuccessText>
            SUCCESSFULLY MINTED CHAINLIFE #{tokenId}
          </St.SuccessText>
          <St.SuccessText>VIEW TRANSACTION ON:</St.SuccessText>
          <St.LinkDiv>
            <St.Link href={openseaLink} target="_blank">
              OPENSEA
            </St.Link>
            <St.Link href={etherscanLink} target="_blank">
              ETHERSCAN
            </St.Link>
          </St.LinkDiv>
        </St.SuccessSection>

        <St.SuccessSection>
          <St.SuccessText>INTERACT WITH YOUR TOKEN HERE:</St.SuccessText>
          <St.SuccessText>(WAIT 30 SECONDS)</St.SuccessText>
          <St.LinkDiv>
            <St.Link href={generatorUrl} target="_blank">
              GENERATOR
            </St.Link>
            <St.Link href={tokenPageUrl} target="_blank">
              TOKEN PAGE
            </St.Link>
          </St.LinkDiv>
        </St.SuccessSection>

        <St.LittleButtonDiv>
          <St.LittleButton onClick={handleCloseModal}>CLOSE</St.LittleButton>
        </St.LittleButtonDiv>
      </St.SuccessModalContainer>
    </>
  );
};

export default SuccessModal;
