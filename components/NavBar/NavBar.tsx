import { useWeb3React } from "@web3-react/core";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import MobileNav from "./MobileNav";
import * as St from "./NavBar.styled";
import NavLinks from "./NavLinks/NavLinks";
import SocialIcons from "./SocialIcons/SocialIcons";
import ConnectDropDown from "components/Modals/ConnectDropDown/ConnectDropDown";
import ConnectModal from "components/Modals/ConnectModal";
import DisconnectModal from "components/Modals/DisconnectModal";
import MarketsDropDown from "components/Modals/MarketsDropDown";
import MarketsModal from "components/Modals/MarketsModal";
import { useEagerConnect } from "hooks/useEagerConnect";
import { useWindowSize } from "hooks/useWindowSize";

const NavBar: React.FC = () => {
  useEagerConnect();
  const { active } = useWeb3React();
  const { windowWidth } = useWindowSize();

  const isMobile = windowWidth < 850;

  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);
  const [showMarketsModal, setShowMarketsModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

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
    if (windowWidth < 850 && showConnectModal) {
      return <ConnectModal setShowModal={setShowConnectModal} />;
    } else if (windowWidth > 850 && showConnectModal) {
      return <ConnectDropDown setShowModal={setShowConnectModal} />;
    }
  };

  const renderMarketsDropDown = () => {
    if (windowWidth < 850 && showMarketsModal) {
      return <MarketsModal setShowModal={setShowMarketsModal} />;
    } else if (windowWidth > 850 && showMarketsModal) {
      return <MarketsDropDown setShowModal={setShowMarketsModal} />;
    }
  };

  return (
    <St.NavContainer>
      <St.LogoDiv>
        <Image
          alt="ChainLife logo"
          height={50}
          src={"/chainlife/chainlife.png"}
          width={50}
        />

        <St.TitleDiv>
          <Link href="/">
            <St.NavTitle>Chainlife</St.NavTitle>
          </Link>
        </St.TitleDiv>
      </St.LogoDiv>
      {!isMobile ? (
        <St.SocialsAndLinks>
          <SocialIcons />

          <NavLinks
            active={active}
            handleConnectClick={handleConnectClick}
            handleMarketsClick={handleMarketsClick}
            setShowMobileNav={setShowMobileNav}
          />
        </St.SocialsAndLinks>
      ) : (
        <>
          <Hamburger
            color="#3A3A3A"
            toggle={setShowMobileNav}
            toggled={showMobileNav}
          />

          <MobileNav
            handleConnectClick={handleConnectClick}
            handleMarketsClick={handleMarketsClick}
            isOpen={showMobileNav}
            setIsOpen={setShowMobileNav}
          />
        </>
      )}

      {showConnectModal ? renderDropDown() : renderMarketsDropDown()}

      {showDisconnectModal && (
        <DisconnectModal setShowModal={setShowDisconnectModal} />
      )}
    </St.NavContainer>
  );
};

export default NavBar;
