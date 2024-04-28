import type { UserZenTokens } from "types/premintTypes";

import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";

import * as St from "../DescriptionSections/Description.styled";
import {
  type ISuccessInfo,
  filterUserTokens,
  presaleMint,
  publicMint,
} from "./web3Helpers";
import BuyModal from "components/Modals/BuyModal/BuyModal";
import ConnectModal from "components/Modals/ConnectModal";
import ErrorModal from "components/Modals/ErrorModal";
import PremintModal from "components/Modals/PremintModal/PremintModal";
import SuccessModal from "components/Modals/SuccessModal";
import { useContract } from "hooks/useContract";
import { useMintDetails } from "hooks/useMintDetails";
import { usePreMintOwners } from "hooks/usePreMintOwners";

const Web3Buttons: React.FC = () => {
  const { account, active } = useWeb3React();
  const { discountPrice, isMintLive, isPreMint, maxSupply, mintPrice } =
    useMintDetails();
  const { contract } = useContract();

  const { error: preMintError, userZenTokens: initialUserZenTokens } =
    usePreMintOwners();
  const [userZenTokens, setUserZenTokens] = useState<UserZenTokens>();

  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showPremintModal, setShowPremintModal] = useState(false);

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
    } else if (preMintError) {
      // if error fetching pre-mint owners, show error
      console.error(preMintError);
      handleError("ERROR GETTING ZEN TOKENS");
    } else if (isPreMint && userZenTokens) {
      const { enso, focus } = userZenTokens;
      if (enso.length || focus.length) {
        // if pre-mint, and user has zen tokens, show pre-mint modal
        setShowPremintModal(true);
      } else {
        handleError(
          `NO UNUSED ZEN. TOKENS FOUND. YOU MAY HAVE ALREADY MINTED OR YOU DON'T OWN ANY ZEN TOKENS.`,
        );
      }
    } else if (!isPreMint && isMintLive) {
      // if public mint, and mint is live, show buy modal
      setShowBuyModal(true);
    } else if (isPreMint) {
      handleError(
        "SOMETHING WENT WRONG. PLEASE CHECK THAT CONNECTED WALLET HAS ENSO OR FOCUS TOKENS.",
      );
    } else {
      handleError("SOMETHING WENT WRONG.");
    }
  };

  const handleSuccess = (successInfo: ISuccessInfo) => {
    setSuccessInfo(successInfo);
    setShowSuccessModal(true);
  };

  const handlePresaleMint = async (project: number, token: number) => {
    if (account) {
      try {
        const successInfo = await presaleMint(
          contract,
          maxSupply,
          account,
          discountPrice,
          project,
          token,
          handleError,
          setBuyButtonText,
        );

        if (successInfo) {
          handleSuccess(successInfo);
          // refilter zen tokens to see which was used
          if (initialUserZenTokens) {
            filterUserTokens(contract, initialUserZenTokens)
              .then((filteredUserZenTokens) =>
                setUserZenTokens(filteredUserZenTokens),
              )
              // eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable
              .catch(console.error);
          }
        }
      } catch (err) {
        console.error(err);
        handleError("Error minting token");
      }
    }
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
    setShowPremintModal(false);
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

  useEffect(() => {
    if (initialUserZenTokens) {
      filterUserTokens(contract, initialUserZenTokens)
        .then((filteredUserZenTokens) =>
          setUserZenTokens(filteredUserZenTokens),
        )
        // eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable
        .catch(console.error);
    }
  }, [contract, initialUserZenTokens]);

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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
          handlePublicMint={void handlePublicMint as any}
          setShowModal={setShowBuyModal}
        />
      )}

      {showPremintModal && userZenTokens && (
        <PremintModal
          buyButtonText={buyButtonText}
          handleError={handleError}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
          handlePresaleMint={void handlePresaleMint as any}
          setShowModal={setShowPremintModal}
          userZenTokens={userZenTokens}
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
