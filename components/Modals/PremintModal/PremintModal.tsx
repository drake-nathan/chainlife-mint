/* eslint-disable @next/next/no-img-element */
import type { UserZenTokens } from "types/premintTypes";

import React, { useEffect, useState } from "react";

import * as St from "./PremintModal.styled";

interface Props {
  buyButtonText: string;
  handleError: (error: string) => void;
  handlePresaleMint: (project: number, token: number) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  userZenTokens: UserZenTokens;
}

const PremintModal: React.FC<Props> = ({
  buyButtonText,
  handleError,
  handlePresaleMint,
  setShowModal,
  userZenTokens,
}) => {
  const [activeCollection, setActiveCollection] = useState<1 | 2>(1);
  const [activeEnso, setActiveEnso] = useState<null | number>(null);
  const [activeFocus, setActiveFocus] = useState<null | number>(null);

  const [isFocusImgError, setIsFocusImgError] = useState<boolean>(false);

  const root = "https://mattoapi.blob.core.windows.net/thumbnails";
  const enso = { id: 34, slug: "enso" };
  const focus = { id: 181, slug: "focus" };

  useEffect(() => {
    if (!userZenTokens.enso.length) {
      setActiveCollection(2);
    }

    if (!userZenTokens.focus.length && !userZenTokens.enso.length) {
      setShowModal(false);
    }
  }, [setShowModal, userZenTokens.enso, userZenTokens.focus]);

  const handleMintClick = () => {
    const project = activeEnso ? enso.id : focus.id;
    const token = activeEnso ? activeEnso : activeFocus;

    if (project && token) {
      handlePresaleMint(project, token);
    } else {
      handleError("PLEASE SELECT A TOKEN TO MINT WITH");
    }
  };

  return (
    <>
      <St.BuyModalBackground onClick={() => setShowModal(false)} />
      <St.BuyModalContainer>
        <St.UnitDiv>
          <St.UnitText style={{ color: "#fff", fontWeight: 500 }}>
            {userZenTokens.enso.length > 0 && userZenTokens.focus.length > 0
              ? "CHOOSE A MATTO COLLECTION TO MINT WITH"
              : userZenTokens.enso.length > 0 &&
                  userZenTokens.focus.length === 0
                ? "SELECT AN ENSO TOKEN TO MINT WITH"
                : "SELECT A FOCUS TOKEN TO MINT WITH"}
          </St.UnitText>
          <St.Choices>
            {userZenTokens.enso.length ? (
              <>
                <St.CollectionText
                  className={activeCollection === 1 ? "active" : ""}
                  onClick={() => setActiveCollection(1)}
                >
                  {userZenTokens.enso.length > 0 &&
                  userZenTokens.focus.length > 0
                    ? "ENSO"
                    : ""}
                </St.CollectionText>
                <St.CollectionText>
                  {" "}
                  {userZenTokens.focus.length > 0 &&
                  userZenTokens.enso.length > 0
                    ? "|"
                    : ""}
                </St.CollectionText>
              </>
            ) : null}{" "}
            <St.CollectionText
              className={activeCollection === 2 ? "active" : ""}
              onClick={() => setActiveCollection(2)}
            >
              {userZenTokens.enso.length && userZenTokens.focus.length
                ? "FOCUS"
                : ""}
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
                    alt="enso"
                    height={150}
                    src={`${root}/enso_${token}.png`}
                    width={150}
                  />{" "}
                  <St.TokenInfo>
                    <St.TokenText style={{ color: "#fff", fontWeight: 500 }}>
                      {activeEnso === token ? "TOKEN SELECTED" : ""}
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
                  {!isFocusImgError ? (
                    <img
                      alt="focus"
                      height={150}
                      onError={() => setIsFocusImgError(true)}
                      src={`${root}/focus_${token}.png`}
                      width={150}
                    />
                  ) : (
                    <img
                      alt="focus"
                      height={150}
                      src={`FOCUS-placeholder_150x.png`}
                      width={150}
                    />
                  )}{" "}
                  <St.TokenInfo>
                    <St.TokenText style={{ color: "#fff", fontWeight: 500 }}>
                      {activeFocus === token ? "TOKEN SELECTED" : ""}
                    </St.TokenText>
                    <St.TokenText>FOCUS #{token}</St.TokenText>
                  </St.TokenInfo>
                </St.TokenListing>
              ))}
        </St.ListingsWrapper>

        <St.Button onClick={handleMintClick}>
          {buyButtonText}
          {activeEnso
            ? ` WITH ENSO #${activeEnso}`
            : activeFocus
              ? ` WITH FOCUS #${activeFocus}`
              : ""}
        </St.Button>
      </St.BuyModalContainer>
    </>
  );
};

export default PremintModal;
