import { useWeb3React } from "@web3-react/core";
import React from "react";

import * as St from "./Modals.styled";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DisconnectModal: React.FC<Props> = ({ setShowModal }) => {
  const { deactivate } = useWeb3React();

  const handleDisconnectWallet = () => {
    deactivate();
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.CenterModalContainer>
        <St.MsgDiv>
          <St.Text>Would you like to disconnect?</St.Text>
          <St.XButton onClick={handleCloseModal} src="/icons/x-icon-lg.svg" />
        </St.MsgDiv>

        <St.LittleButtonDiv>
          <St.LittleButton onClick={handleDisconnectWallet}>
            Yes
          </St.LittleButton>
          <St.LittleButton onClick={handleCloseModal}>No</St.LittleButton>
        </St.LittleButtonDiv>

        <St.SubtleText>[ Will reconnect on refresh ]</St.SubtleText>
      </St.CenterModalContainer>
    </>
  );
};

export default DisconnectModal;
