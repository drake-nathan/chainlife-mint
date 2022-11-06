/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import { UserZenTokens } from 'types/premintTypes';
import * as PremintTokens from '../../utils/thumbnails';
import * as St from './PremintModal.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleCryptoMint: () => void;
  handleError: (error: string) => void;
  buyButtonText: string;
  userZenTokens: UserZenTokens;
}

const PremintModal: React.FC<Props> = ({
  setShowModal,
  handleCryptoMint,
  handleError,
  buyButtonText,
  userZenTokens,
}) => {
  const { mintPrice, discountPrice } = useMintDetails();

  const [activeCollection, setActiveCollection] = useState<1 | 2>(1);
  const [activeEnso, setActiveEnso] = useState<number | null>(null);
  const [activeFocus, setActiveFocus] = useState<number | null>(null);

  const root = 'https://mattoapi.blob.core.windows.net/thumbnails';
  const enso = { id: 34, slug: 'enso' };
  const focus = { id: 181, slug: 'focus' };

  useEffect(() => {
    if (!userZenTokens.enso.length) {
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
            {userZenTokens.enso.length > 0 && userZenTokens.focus.length > 0
              ? 'CHOOSE A MATTO COLLECTION TO MINT WITH'
              : userZenTokens.enso.length > 0 && userZenTokens.focus.length === 0
              ? 'SELECT AN ENSO TOKEN TO MINT WITH'
              : 'SELECT A FOCUS TOKEN TO MINT WITH'}
          </St.UnitText>
          <St.Choices>
            {userZenTokens.enso.length > 0 ? (
              <>
                <St.CollectionText
                  onClick={() => setActiveCollection(1)}
                  className={activeCollection === 1 ? 'active' : ''}
                >
                  {userZenTokens.enso.length > 0 && userZenTokens.focus.length > 0
                    ? 'ENSO'
                    : ''}
                </St.CollectionText>
                <St.CollectionText>
                  {' '}
                  {userZenTokens.focus.length > 0 && userZenTokens.enso.length > 0
                    ? '|'
                    : ''}
                </St.CollectionText>
              </>
            ) : null}{' '}
            <St.CollectionText
              onClick={() => setActiveCollection(2)}
              className={activeCollection === 2 ? 'active' : ''}
            >
              {userZenTokens.enso.length > 0 && userZenTokens.focus.length > 0
                ? 'FOCUS'
                : ''}
            </St.CollectionText>
          </St.Choices>
        </St.UnitDiv>
        <St.ListingsWrapper>
          {activeCollection === 1
            ? userZenTokens.enso.map((token) => (
                <St.TokenListing
                  key={token}
                  onClick={() => {
                    setActiveEnso(token);
                    setActiveFocus(null);
                  }}
                >
                  <img
                    src={`${root}/enso_${token}.png`}
                    height={150}
                    width={150}
                    alt="enso"
                  />{' '}
                  <St.TokenInfo>
                    <St.TokenText style={{ color: '#fff', fontWeight: 500 }}>
                      {activeEnso === token ? 'TOKEN SELECTED' : ''}
                    </St.TokenText>
                    <St.TokenText>ENSO #{token}</St.TokenText>
                  </St.TokenInfo>
                </St.TokenListing>
              ))
            : userZenTokens.focus.map((token) => (
                <St.TokenListing
                  key={token}
                  onClick={() => {
                    setActiveFocus(token);
                    setActiveEnso(null);
                  }}
                >
                  <img
                    src={`${root}/focus_${token}.png`}
                    height={150}
                    width={150}
                    alt="focus"
                  />{' '}
                  <St.TokenInfo>
                    <St.TokenText style={{ color: '#fff', fontWeight: 500 }}>
                      {activeFocus === token ? 'TOKEN SELECTED' : ''}
                    </St.TokenText>
                    <St.TokenText>FOCUS #{token}</St.TokenText>
                  </St.TokenInfo>
                </St.TokenListing>
              ))}
        </St.ListingsWrapper>

        <St.Button onClick={handleCryptoMint}>
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
