import React from 'react';
import { useWeb3React } from '@web3-react/core';
import * as St from './MobileNav.styled';
import NavLinks from './NavLinks/NavLinks';
import SocialIcons from './SocialIcons/SocialIcons';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMarketsClick: () => void;
  handleConnectClick: () => void;
}

const MobileNav: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  handleMarketsClick,
  handleConnectClick,
}) => {
  const { active } = useWeb3React();

  return (
    <St.Container isOpen={isOpen}>
      <NavLinks
        handleMarketsClick={handleMarketsClick}
        handleConnectClick={handleConnectClick}
        active={active}
        setShowMobileNav={setIsOpen}
      />
      <SocialIcons />
    </St.Container>
  );
};

export default MobileNav;
