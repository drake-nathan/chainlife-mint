/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import * as PremintTokens from '../../utils/thumbnails';
import * as St from './PremintModal.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleCryptoMint: () => void;
  handleError: (error: string) => void;
  buyButtonText: string;
}

const PremintModal: React.FC<Props> = ({
  setShowModal,
  handleCryptoMint,
  buyButtonText,
}) => {
  const { mintPrice } = useMintDetails();

  const [activeCollection, setActiveCollection] = useState(1);
  const [activeEnso, setActiveEnso] = useState<Number | null>(null);
  const [activeFocus, setActiveFocus] = useState<Number | null>(null);

  useEffect(() => {
    if (PremintTokens.ensoURLs.length === 0) {
      setActiveCollection(2);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.BuyModalBackground onClick={handleCloseModal} />
      <St.BuyModalContainer>
        <St.UnitDiv>
          <St.UnitText style={{ color: '#fff', fontWeight: 500 }}>
            {PremintTokens.ensoURLs.length > 0 && PremintTokens.focusURLs.length > 0
              ? 'CHOOSE A MATTO COLLECTION TO MINT WITH'
              : PremintTokens.ensoURLs.length > 0 && PremintTokens.focusURLs.length === 0
              ? 'SELECT AN ENSO TOKEN TO MINT WITH'
              : 'SELECT A FOCUS TOKEN TO MINT WITH'}
          </St.UnitText>
          <St.Choices>
            {PremintTokens.ensoURLs.length > 0 ? (
              <>
                <St.CollectionText
                  onClick={() => setActiveCollection(1)}
                  className={activeCollection === 1 ? 'active' : ''}
                >
                  {PremintTokens.ensoURLs.length > 0 && PremintTokens.focusURLs.length > 0
                    ? 'ENSO'
                    : ''}
                </St.CollectionText>
                <St.CollectionText>
                  {' '}
                  {PremintTokens.focusURLs.length > 0 && PremintTokens.ensoURLs.length > 0
                    ? '|'
                    : ''}
                </St.CollectionText>
              </>
            ) : null}{' '}
            <St.CollectionText
              onClick={() => setActiveCollection(2)}
              className={activeCollection === 2 ? 'active' : ''}
            >
              {PremintTokens.ensoURLs.length > 0 && PremintTokens.focusURLs.length > 0
                ? 'FOCUS'
                : ''}
            </St.CollectionText>
          </St.Choices>
        </St.UnitDiv>
        <St.ListingsWrapper>
          {activeCollection === 1
            ? PremintTokens.ensoURLs.map((thumb) => (
                <St.TokenListing
                  key={thumb.tokenId}
                  onClick={() => {
                    setActiveEnso(thumb.tokenId);
                    setActiveFocus(null);
                  }}
                >
                  <img src={thumb.url} height={150} width={150} alt="enso" />{' '}
                  <St.TokenInfo>
                    <St.TokenText style={{ color: '#fff', fontWeight: 500 }}>
                      {activeEnso === thumb.tokenId ? 'TOKEN SELECTED' : ''}
                    </St.TokenText>
                    <St.TokenText>ENSO #{thumb.tokenId}</St.TokenText>
                  </St.TokenInfo>
                </St.TokenListing>
              ))
            : PremintTokens.focusURLs.map((thumb) => (
                <St.TokenListing
                  key={thumb.tokenId}
                  onClick={() => {
                    setActiveFocus(thumb.tokenId);
                    setActiveEnso(null);
                  }}
                >
                  <img src={thumb.url} height={150} width={150} alt="enso" />{' '}
                  <St.TokenInfo>
                    <St.TokenText style={{ color: '#fff', fontWeight: 500 }}>
                      {activeFocus === thumb.tokenId ? 'TOKEN SELECTED' : ''}
                    </St.TokenText>
                    <St.TokenText>FOCUS #{thumb.tokenId}</St.TokenText>
                  </St.TokenInfo>
                </St.TokenListing>
              ))}
        </St.ListingsWrapper>

        <St.Button onClick={() => handleCryptoMint()}>
          {buyButtonText}
          {activeEnso !== null
            ? `WITH ENSO #${activeEnso}`
            : activeFocus !== null
            ? `WITH FOCUS #${activeFocus}`
            : ''}
        </St.Button>
      </St.BuyModalContainer>
    </>
  );
};

export default PremintModal;
