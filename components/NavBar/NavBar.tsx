/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import ConnectDropDown from 'components/Modals/ConnectDropDown';
import ClLogo from '../../public/chainLife-logo.png';
import * as St from './NavBar.styled';
import { useWeb3React } from '@web3-react/core';

const NavBar: React.FC = () => {
  const { active } = useWeb3React();
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleConnectClick = () => {
    setShowConnectModal(!showConnectModal);
  };

  return (
    <>
      <St.NavContainer>
        <St.logoDiv>
          <Image src={ClLogo} height={35} width={35} alt="ChainLife logo" />
          <St.NavLink href="https://matto.xyz/" target="blank" rel="noreferrer">
            <St.NavTitle>Chainlife</St.NavTitle>
          </St.NavLink>
        </St.logoDiv>
        <St.NavLinksDiv />
        <St.Gap />
        <St.NavLinksDiv>
          <St.NavLink href="https://matto.xyz/" target="blank">
            ABOUT
          </St.NavLink>
          <St.NavLink href="https://matto.xyz/" target="blank">
            HOW IT WORKS
          </St.NavLink>
          <St.NavConnect onClick={handleConnectClick}>
            {!active ? 'CONNECT WALLET' : 'CONNECTED'}
          </St.NavConnect>
        </St.NavLinksDiv>
        {showConnectModal && (
          <ConnectDropDown setShowModal={setShowConnectModal} />
        )}
      </St.NavContainer>
    </>
  );
};

export default NavBar;
