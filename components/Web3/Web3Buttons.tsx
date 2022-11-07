import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useMintDetails } from 'hooks/useMintDetails';
import { useContract } from 'hooks/useContract';
import { usePreMintOwners } from 'hooks/usePreMintOwners';
import { publicMint, presaleMint, ISuccessInfo } from './web3Helpers';
import ConnectModal from 'components/Modals/ConnectModal';
import BuyModal from 'components/Modals/BuyModal';
import PremintModal from 'components/Modals/PremintModal';
import ErrorModal from 'components/Modals/ErrorModal';
import SuccessModal from 'components/Modals/SuccessModal';
import * as St from '../DescriptionSections/Description.styled';

const Web3Buttons: React.FC = () => {
  const { active, account } = useWeb3React();
  const { userZenTokens, error: preMintError } = usePreMintOwners();
  const { isPreMint, mintPrice, discountPrice, maxSupply } = useMintDetails();
  const { contract } = useContract();

  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showPremintModal, setShowPremintModal] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successInfo, setSuccessInfo] = useState<ISuccessInfo>();

  const [cryptoButtonText, setCryptoButtonText] = useState('CONNECT WALLET');
  const [buyButtonText, setBuyButtonText] = useState('MINT');

  const handleError = (error: string) => {
    setErrorMessage(error);
    setShowErrorModal(true);
  };

  const handleCryptoClick = async () => {
    if (!active) {
      setShowConnectModal(!showConnectModal);
    } else if (preMintError) {
      console.error(preMintError);
      handleError('ERROR GETTING ZEN TOKENS');
    } else if (isPreMint && userZenTokens) {
      setShowPremintModal(true);
    } else {
      handleError(`MUST BE ZEN. TOKEN HOLDER TO MINT DURING ZEN. MINT`);
    }
  };

  const handlePresaleMint = async (project: number, token: number) => {
    if (account) {
      try {
        presaleMint(
          contract.mainnet,
          maxSupply,
          account as string,
          discountPrice,
          project,
          token,
          handleError,
          handleSuccess,
          setBuyButtonText,
          setShowBuyModal,
        );
      } catch (err) {
        console.error(err);
        handleError('Error minting token');
      }
    }
  };

  const handlePublicMint = async (toAddress?: string) => {
    try {
      publicMint(
        contract.mainnet,
        maxSupply,
        account as string,
        mintPrice,
        toAddress || '',
        handleError,
        handleSuccess,
        setBuyButtonText,
        setShowBuyModal,
      );
    } catch (err) {
      console.error(err);
      handleError('Error minting token');
    }
  };

  const handleSuccess = (successInfo: ISuccessInfo) => {
    setSuccessInfo(successInfo);
    setShowSuccessModal(true);
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
      setCryptoButtonText('MINT');
      setTimeout(() => {
        setShowConnectModal(false);
      }, 2000);
    }

    if (!active) {
      setCryptoButtonText('CONNECT');
      closeAllModals();
    }
  }, [active]);

  return (
    <St.ButtonContainer>
      <St.Button onClick={handleCryptoClick}>{cryptoButtonText}</St.Button>

      {showConnectModal && <ConnectModal setShowModal={setShowConnectModal} />}

      {showBuyModal && (
        <BuyModal
          setShowModal={setShowBuyModal}
          handleCryptoMint={handlePublicMint}
          handleError={handleError}
          buyButtonText={buyButtonText}
        />
      )}

      {showPremintModal && userZenTokens && (
        <PremintModal
          setShowModal={setShowPremintModal}
          handlePresaleMint={handlePresaleMint}
          handleError={handleError}
          buyButtonText={buyButtonText}
          userZenTokens={userZenTokens}
        />
      )}

      {showErrorModal && (
        <ErrorModal setShowModal={setShowErrorModal} message={errorMessage} />
      )}

      {showSuccessModal && (
        <SuccessModal
          setShowModal={setShowSuccessModal}
          successInfo={successInfo as ISuccessInfo}
        />
      )}
    </St.ButtonContainer>
  );
};

export default Web3Buttons;
