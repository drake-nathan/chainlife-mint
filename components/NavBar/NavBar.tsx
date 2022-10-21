/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import ConnectDropDown from 'components/Modals/ConnectDropDown';
import ClLogo from '../../public/chainLife-logo.png';
import Twitter from '../../public/icons/Twitter.svg';
import Discord from '../../public/icons/Discord-Logo-White.svg';
import Instagram from '../../public/icons/Instagram';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleConnectClick = () => {
    {
      setShowConnectModal(!showConnectModal);
    }
  };

  return (
    <>
      <St.NavContainer>
        <St.logoDiv>
          <Image src={ClLogo} height={35} width={35} alt="ChainLife logo" />
          <St.NavLink href="https://matto.xyz/" target="blank" rel="noreferrer">
            <St.NavTitle>ChainLife</St.NavTitle>
          </St.NavLink>
          {/* <St.NavLink
            href="https://twitter.com/hdlcorp"
            className="menu-title"
            target="blank"
            rel="noreferrer"
          >
            <Image src={Twitter} height={20} width={20} alt="logo" />
          </St.NavLink>
          <St.NavLink
            href="https://discord.gg/7QkYRK6Zt8"
            className="menu-title"
            target="blank"
            rel="noreferrer"
          >
            <Image src={Discord} height={24} width={24} alt="logo" />
          </St.NavLink>
          <St.NavLink
            href="https://www.instagram.com/hygienic_dress_league/"
            className="menu-title"
            target="blank"
            rel="noreferrer"
          >
            <Instagram height={20} width={20} />
  </St.NavLink> */}
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
            CONNECT WALLET
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
