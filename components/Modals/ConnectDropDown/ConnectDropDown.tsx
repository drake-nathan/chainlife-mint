import { useWeb3React } from "@web3-react/core";
import React from "react";
import * as IoIcons from "react-icons/io5";

import * as St from "./ConnectDropDown.styled";
import { switchChain } from "components/Web3/web3Helpers";
import { Connectors, connectors } from "services/web3/connectors";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectDropDown: React.FC<Props> = ({ setShowModal }) => {
  const { activate } = useWeb3React();

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
    } finally {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.DropDownContainer>
        <St.TopButtonContainer>
          <IoIcons.IoCaretUpCircleOutline
            className="up-arrow"
            onClick={handleCloseModal}
          />
          <St.Button
            id="metamask"
            onClick={() => void handleConnectWallet(Connectors.Injected)}
          >
            METAMASK
          </St.Button>
        </St.TopButtonContainer>
        <St.Button
          onClick={() => void handleConnectWallet(Connectors.WalletConnect)}
        >
          WALLETCONNECT
        </St.Button>
        <St.Button
          id="coinbase"
          onClick={() => void handleConnectWallet(Connectors.Coinbase)}
        >
          COINBASE
        </St.Button>
      </St.DropDownContainer>
    </>
  );
};

export default ConnectDropDown;
