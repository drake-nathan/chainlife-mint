/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import { Squash as Hamburger } from 'hamburger-react';
import { useWeb3React } from '@web3-react/core';
import { useWindowSize } from 'hooks/useWindowSize';
import ConnectDropDown from 'components/Modals/ConnectDropDown';
import MarketsDropDown from 'components/Modals/MarketsDropDown';
import { useEagerConnect } from 'hooks/useEagerConnect';
import * as IoIcons from 'react-icons/io';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  useEagerConnect();
  const { active } = useWeb3React();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showMarketsDropDown, setShowMarketsDropDown] = useState(false);
  const { windowWidth, windowHeight } = useWindowSize();
  const [isOpen, setOpen] = useState(false);

  const handleConnectClick = () => {
    setShowMarketsDropDown(false);
    setShowConnectModal(!showConnectModal);
  };

  const handleMarketsClick = () => {
    setShowConnectModal(false);
    setShowMarketsDropDown(!showMarketsDropDown);
  };

  const renderFullNav = () => {
    return (
      <St.NavContainer>
        <St.logoDiv>
          <Image
            src={'/chainlife/chainlife.png'}
            height={50}
            width={50}
            alt="ChainLife logo"
          />
          <St.NavLink href="/">
            <St.NavTitle>Chainlife (Testnet)</St.NavTitle>
          </St.NavLink>
        </St.logoDiv>
        <St.NavLinksDiv>
          <St.SocialContainer>
            <St.NavLink
              href="https://twitter.com/MonkMatto"
              target="blank"
              rel="noreferrer"
            >
              <Image src={'/icons/Twitter.svg'} height={21} width={21} alt="logo" />
            </St.NavLink>
            <St.NavLink
              href="https://discord.com/invite/AQDwjAa3g2"
              target="blank"
              rel="noreferrer"
            >
              <Image
                src={'/icons/Discord-Logo-White.svg'}
                height={24}
                width={24}
                alt="logo"
              />
            </St.NavLink>
            <St.NavLink
              href="https://www.youtube.com/channel/UCZGHO8oZZcvgdXVyDv-majg/featured"
              target="blank"
              rel="noreferrer"
            >
              <IoIcons.IoLogoYoutube style={{ height: '24px', width: '24px' }} />
            </St.NavLink>
          </St.SocialContainer>
        </St.NavLinksDiv>
        <St.NavLinksDiv>
          <St.NavLink href="https://chainlife.gitbook.io/docs/" target="blank">
            {windowWidth < 500 ? 'ABOUT' : 'HOW IT WORKS'}
          </St.NavLink>
          <St.NavLink href="https://random.chainlife.xyz/" target="blank">
            RANDOM
          </St.NavLink>
          <St.NavConnect onClick={handleMarketsClick}>MARKETS</St.NavConnect>
          <St.NavConnect onClick={handleConnectClick}>
            {!active ? (windowWidth < 500 ? 'CONNECT' : 'CONNECT WALLET') : 'CONNECTED'}
          </St.NavConnect>
        </St.NavLinksDiv>
        {showConnectModal && <ConnectDropDown setShowModal={setShowConnectModal} />}
        {showMarketsDropDown && (
          <MarketsDropDown setShowMarketsDropDown={setShowMarketsDropDown} />
        )}
      </St.NavContainer>
    );
  };

  const renderMobileNav = () => {
    return (
      <St.MobileNavContainer>
        <St.MobileNavLinksDiv>
          <St.MobileNavLink href="https://matto.xyz/" target="blank">
            ABOUT
          </St.MobileNavLink>
          <St.MobileNavLink href="https://matto.xyz/" target="blank">
            HOW IT WORKS
          </St.MobileNavLink>
          <St.MobileNavConnect onClick={handleMarketsClick}>MARKETS</St.MobileNavConnect>
          <St.MobileNavConnect onClick={handleConnectClick}>
            {!active ? 'CONNECT WALLET' : 'CONNECTED'}
          </St.MobileNavConnect>
        </St.MobileNavLinksDiv>
        {showConnectModal && <ConnectDropDown setShowModal={setShowConnectModal} />}
        {showMarketsDropDown && (
          <MarketsDropDown setShowMarketsDropDown={setShowMarketsDropDown} />
        )}
      </St.MobileNavContainer>
    );
  };

  const renderHamNav = () => {
    return (
      <>
        <St.NavContainer>
          <St.logoDiv>
            <Image
              src={'/chainlife/chainlife.png'}
              height={35}
              width={35}
              alt="ChainLife logo"
            />
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
                <Image src={'/icons/Twitter.svg'} height={21} width={21} alt="logo" />
              </St.NavLink>
              <St.NavLink
                href="https://discord.com/invite/AQDwjAa3g2"
                target="blank"
                rel="noreferrer"
              >
                <Image
                  src={'/icons/Discord-Logo-White.svg'}
                  height={24}
                  width={24}
                  alt="logo"
                />
              </St.NavLink>
            </St.SocialContainer>
          </St.NavLinksDiv>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </St.NavContainer>
        {isOpen ? renderMobileNav() : null}
      </>
    );
  };

  return <>{renderFullNav()}</>;
};

export default NavBar;
