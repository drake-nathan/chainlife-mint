import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from 'hooks/useWindowSize';
import { useEagerConnect } from 'hooks/useEagerConnect';
import ConnectDropDown from 'components/Modals/ConnectDropDown/ConnectDropDown';
import ConnectModal from 'components/Modals/ConnectModal';
import MarketsDropDown from 'components/Modals/MarketsDropDown';
import SocialIcons from './SocialIcons/SocialIcons';
import MarketsModal from 'components/Modals/MarketsModal';
import NavLinks from './NavLinks/NavLinks';
import DisconnectModal from 'components/Modals/DisconnectModal';
import { useWeb3React } from '@web3-react/core';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  useEagerConnect();
  const { active } = useWeb3React();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);
  const [showMarketsModal, setShowMarketsModal] = useState(false);
  const { windowWidth } = useWindowSize();

  const handleConnectClick = () => {
    setShowMarketsModal(false);
    if (!active) setShowConnectModal(!showConnectModal);
    else setShowDisconnectModal(true);
  };

  const handleMarketsClick = () => {
    setShowConnectModal(false);
    setShowMarketsModal(!showMarketsModal);
  };

  const renderDropDown = () => {
    if (windowWidth < 850 && showConnectModal === true) {
      return <ConnectModal setShowModal={setShowConnectModal} />;
    } else if (windowWidth > 850 && showConnectModal === true) {
      return <ConnectDropDown setShowModal={setShowConnectModal} />;
    }
  };

  const renderMarketsDropDown = () => {
    if (windowWidth < 850 && showMarketsModal === true) {
      return <MarketsModal setShowModal={setShowMarketsModal} />;
    } else if (windowWidth > 850 && showMarketsModal === true) {
      return <MarketsDropDown setShowModal={setShowMarketsModal} />;
    }
  };

  return (
    <St.NavContainer>
      <St.logoDiv>
        <Link href="/">
          <Image
            src={'/chainlife/chainlife.png'}
            height={50}
            width={50}
            alt="ChainLife logo"
          />
        </Link>
        <St.TitleDiv>
          <Link href="/">
            <St.NavTitle>Chainlife</St.NavTitle>
          </Link>
        </St.TitleDiv>
      </St.logoDiv>
      <St.SocialsAndLinks>
        <SocialIcons />
        <NavLinks
          handleMarketsClick={handleMarketsClick}
          handleConnectClick={handleConnectClick}
          active={active}
        />
      </St.SocialsAndLinks>

      {showConnectModal ? renderDropDown() : renderMarketsDropDown()}

      {showDisconnectModal && <DisconnectModal setShowModal={setShowDisconnectModal} />}
    </St.NavContainer>
  );
};

export default NavBar;
