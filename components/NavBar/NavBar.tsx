/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import ConnectDropDown from 'components/Modals/ConnectDropDown';
import MarketsDropDown from 'components/Modals/MarketsDropDown';
import Twitter from '../../public/icons/Twitter.svg';
import Discord from '../../public/icons/Discord-Logo-White.svg';
import ClLogo from '../../public/chainlife_tree_logo.png';
import * as St from './NavBar.styled';
import { useWeb3React } from '@web3-react/core';

const NavBar: React.FC = () => {
  const { active } = useWeb3React();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showMarketsDropDown, setShowMarketsDropDown] = useState(false);

  const handleConnectClick = () => {
    setShowMarketsDropDown(false);
    setShowConnectModal(!showConnectModal);
  };

  const handleMarketsClick = () => {
    setShowConnectModal(false);
    setShowMarketsDropDown(!showMarketsDropDown);
  };

  return (
    <>
      <St.NavContainer>
        <St.logoDiv>
          <Image src={ClLogo} height={35} width={35} alt="ChainLife logo" />
          <St.NavLink
            href="https://linktr.ee/MonkMatto"
            target="blank"
            rel="noreferrer"
          >
            <St.NavTitle>Chainlife</St.NavTitle>
          </St.NavLink>
        </St.logoDiv>
        <St.NavLinksDiv>
          <St.SocialContainer>
            <St.NavLink
              href="https://twitter.com/MonkMatto"
              target="blank"
              rel="noreferrer"
            >
              <Image src={Twitter} height={21} width={21} alt="logo" />
            </St.NavLink>
            <St.NavLink
              href="https://discord.com/invite/AQDwjAa3g2"
              target="blank"
              rel="noreferrer"
            >
              <Image src={Discord} height={24} width={24} alt="logo" />
            </St.NavLink>
          </St.SocialContainer>
          <St.NavLink href="https://matto.xyz/" target="blank">
            ABOUT
          </St.NavLink>
          <St.NavLink href="https://matto.xyz/" target="blank">
            HOW IT WORKS
          </St.NavLink>
          <St.NavConnect onClick={handleMarketsClick}>MARKETS</St.NavConnect>
          <St.NavConnect onClick={handleConnectClick}>
            {!active ? 'CONNECT WALLET' : 'CONNECTED'}
          </St.NavConnect>
        </St.NavLinksDiv>
        {showConnectModal && (
          <ConnectDropDown setShowModal={setShowConnectModal} />
        )}
        {showMarketsDropDown && (
          <MarketsDropDown setShowMarketsDropDown={setShowMarketsDropDown} />
        )}
      </St.NavContainer>
    </>
  );
};

export default NavBar;
