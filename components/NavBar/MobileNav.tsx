import { useWeb3React } from "@web3-react/core";
import React from "react";

import * as St from "./MobileNav.styled";
import NavLinks from "./NavLinks/NavLinks";
import SocialIcons from "./SocialIcons/SocialIcons";

interface Props {
  handleConnectClick: () => void;
  handleMarketsClick: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<Props> = ({
  handleConnectClick,
  handleMarketsClick,
  isOpen,
  setIsOpen,
}) => {
  const { active } = useWeb3React();

  return (
    <St.Container isOpen={isOpen}>
      <NavLinks
        active={active}
        handleConnectClick={handleConnectClick}
        handleMarketsClick={handleMarketsClick}
        setShowMobileNav={setIsOpen}
      />
      <SocialIcons />
    </St.Container>
  );
};

export default MobileNav;
