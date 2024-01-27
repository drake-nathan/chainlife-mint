import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";

import * as St from "./Modals.styled";
import { switchChain } from "components/Web3/web3Helpers";
import { Connectors, connectors } from "services/web3/connectors";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectModal: React.FC<Props> = ({ setShowModal }) => {
  const { activate, active } = useWeb3React();

  const [txMsg, setTxMsg] = useState("");

  const handleConnectWallet = async (connectorToUse: Connectors) => {
    const connector = connectors[connectorToUse];

    try {
      if (connectorToUse === Connectors.Injected) {
        if (connector.getChainId().valueOf() !== "0x1") {
          await switchChain("0x1");
        }
      }
      await activate(connector);
    } catch (err) {
      console.error(err);
      setTxMsg("ERROR, PLEASE TRY AGAIN");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setTxMsg("");
    }, 5000);
  }, [txMsg]);

  useEffect(() => {
    if (active) {
      setTxMsg("SUCCESSFULLY CONNECTED");
    }
  }, [active]);

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.ModalContainer>
        <St.MsgDiv>
          <St.Text>{txMsg ? txMsg : "CHOOSE CONNECT METHOD"}</St.Text>
          <St.XButton onClick={handleCloseModal} src="/icons/x-icon-lg.svg" />
        </St.MsgDiv>

        <St.SubtleText>[ SET WALLET TO ETHEREUM NETWORK ]</St.SubtleText>

        <St.Button
          onClick={() => void handleConnectWallet(Connectors.Injected)}
        >
          METAMASK
        </St.Button>
        <St.Button
          onClick={() => void handleConnectWallet(Connectors.WalletConnect)}
        >
          WALLETCONNECT
        </St.Button>
        <St.Button
          onClick={() => void handleConnectWallet(Connectors.Coinbase)}
        >
          COINBASE
        </St.Button>
      </St.ModalContainer>
    </>
  );
};

export default ConnectModal;
