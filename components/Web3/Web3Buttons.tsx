import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";

import * as St from "../DescriptionSections/Description.styled";
import { type ISuccessInfo, publicMint } from "./web3Helpers";
import BuyModal from "components/Modals/BuyModal/BuyModal";
import ConnectModal from "components/Modals/ConnectModal";
import ErrorModal from "components/Modals/ErrorModal";
import SuccessModal from "components/Modals/SuccessModal";
import { useContract } from "hooks/useContract";
import { useMintDetails } from "hooks/useMintDetails";

const Web3Buttons: React.FC = () => {
  const { account, active } = useWeb3React();
  const { isMintLive, maxSupply, mintPrice } = useMintDetails();
  const { contract } = useContract();

  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successInfo, setSuccessInfo] = useState<ISuccessInfo>();

  const [cryptoButtonText, setCryptoButtonText] = useState("CONNECT WALLET");
  const [buyButtonText, setBuyButtonText] = useState("MINT");
  const [mintButton, setMintButton] = useState(false);

  const handleError = (error: string) => {
    setErrorMessage(error);
    setShowErrorModal(true);
  };

  const handleMintClick = () => {
    if (!active) {
      // if not connected, invite user to connect
      setShowConnectModal(!showConnectModal);
    } else if (isMintLive) {
      // if public mint, and mint is live, show buy modal
      setShowBuyModal(true);
    } else {
      handleError("SOMETHING WENT WRONG.");
    }
  };

  const handleSuccess = (successInfo: ISuccessInfo) => {
    setSuccessInfo(successInfo);
    setShowSuccessModal(true);
  };

  const handlePublicMint = async (toAddress?: string) => {
    if (account) {
      try {
        const successInfo = await publicMint(
          contract,
          maxSupply,
          account,
          mintPrice,
          toAddress ?? "",
          handleError,
          setBuyButtonText,
        );

        if (successInfo) {
          handleSuccess(successInfo);
          setShowBuyModal(false);
        }
      } catch (err) {
        console.error(err);
        handleError("Error minting token");
      }
    }
  };

  const closeAllModals = () => {
    setShowConnectModal(false);
    setShowBuyModal(false);
    setShowErrorModal(false);
    setShowSuccessModal(false);
  };

  useEffect(() => {
    if (active) {
      setCryptoButtonText("MINT");
      setMintButton(true);
      setTimeout(() => {
        setShowConnectModal(false);
      }, 2000);
    }

    if (!active) {
      setMintButton(false);
      setCryptoButtonText("CONNECT");
      closeAllModals();
    }
  }, [active]);

  return (
    <St.ButtonContainer>
      <St.Button
        className={!isMintLive && mintButton ? "disabled" : ""}
        disabled={!isMintLive && mintButton ? true : false}
        onClick={handleMintClick}
        title={
          !isMintLive && mintButton ? "Mint is not currently active" : "Mint"
        }
      >
        {cryptoButtonText}
      </St.Button>

      {showConnectModal && <ConnectModal setShowModal={setShowConnectModal} />}

      {showBuyModal && (
        <BuyModal
          buyButtonText={buyButtonText}
          handleError={handleError}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          handlePublicMint={handlePublicMint}
          setShowModal={setShowBuyModal}
        />
      )}

      {showErrorModal && (
        <ErrorModal message={errorMessage} setShowModal={setShowErrorModal} />
      )}

      {showSuccessModal && successInfo && (
        <SuccessModal
          setShowModal={setShowSuccessModal}
          successInfo={successInfo}
        />
      )}
    </St.ButtonContainer>
  );
};

export default Web3Buttons;
