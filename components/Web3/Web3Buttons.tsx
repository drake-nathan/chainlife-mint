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
  const { userZenTokens, error: preMintError, refetch } = usePreMintOwners();
  const { isPreMint, mintPrice, discountPrice, maxSupply, isMintLive } = useMintDetails();
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
  const [mintButton, setMintButton] = useState(false);

  const handleError = (error: string) => {
    setErrorMessage(error);
    setShowErrorModal(true);
  };

  const handleMintClick = async () => {
    if (!active) {
      // if not connected, invite user to connect
      setShowConnectModal(!showConnectModal);
    } else if (preMintError) {
      // if error fetching pre-mint owners, show error
      console.error(preMintError);
      handleError('ERROR GETTING ZEN TOKENS');
    } else if (isPreMint && userZenTokens) {
      // if pre-mint, and user has zen tokens, show pre-mint modal
      setShowPremintModal(true);
    } else if (isPreMint && !userZenTokens) {
      // if pre-mint, and user has no zen tokens, show error
      handleError(`MUST BE ZEN. TOKEN HOLDER TO MINT DURING ZEN. MINT`);
    } else if (!isPreMint && isMintLive) {
      // if public mint, and mint is live, show buy modal
      setShowBuyModal(true);
    } else {
      handleError('SOMETHING IS WRONG, NGMI');
    }
  };

  const handlePresaleMint = async (project: number, token: number) => {
    if (account) {
      try {
        const successInfo = await presaleMint(
          contract.mainnet,
          maxSupply,
          account,
          discountPrice,
          project,
          token,
          handleError,
          setBuyButtonText,
        );

        if (successInfo) {
          setSuccessInfo(successInfo);
          setShowPremintModal(false);
          refetch();
        }
      } catch (err) {
        console.error(err);
        handleError('Error minting token');
      }
    }
  };

  const handlePublicMint = async (toAddress?: string) => {
    try {
      const successInfo = await publicMint(
        contract.mainnet,
        maxSupply,
        account as string,
        mintPrice,
        toAddress || '',
        handleError,
        setBuyButtonText,
      );

      if (successInfo) {
        setSuccessInfo(successInfo);
        setShowBuyModal(false);
      }
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
      setMintButton(true);
      setTimeout(() => {
        setShowConnectModal(false);
      }, 2000);
    }

    if (!active) {
      setMintButton(false);
      setCryptoButtonText('CONNECT');
      closeAllModals();
    }
  }, [active]);

  return (
    <St.ButtonContainer>
      <St.Button
        className={!isMintLive && mintButton ? 'disabled' : ''}
        disabled={!isMintLive && mintButton ? true : false}
        onClick={handleMintClick}
        title={!isMintLive && mintButton ? 'Mint is not currently active' : 'Mint'}
      >
        {cryptoButtonText}
      </St.Button>

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
