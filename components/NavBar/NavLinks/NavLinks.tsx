import Link from "next/link";
import React from "react";

import * as St from "./NavLinks.styled";

interface Props {
  active: boolean;
  handleConnectClick: () => void;
  handleMarketsClick: () => void;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<Props> = ({
  active,
  handleConnectClick,
  handleMarketsClick,
  setShowMobileNav,
}) => {
  return (
    <St.NavLinksDiv>
      <Link href="/mint">
        <St.NavItem onClick={() => setShowMobileNav(false)}>MINT</St.NavItem>
      </Link>

      <Link href="/tokens">
        <St.NavItem onClick={() => setShowMobileNav(false)}>TOKENS</St.NavItem>
      </Link>

      <Link href="/world">
        <St.NavItem onClick={() => setShowMobileNav(false)}>WORLD</St.NavItem>
      </Link>

      <a href="https://docs.chainlife.xyz/" rel="noreferrer" target="_blank">
        <St.NavItem onClick={() => setShowMobileNav(false)}>DOCS</St.NavItem>
      </a>

      <St.NavItem
        onClick={() => {
          setShowMobileNav(false);
          handleMarketsClick();
        }}
      >
        LINKS
      </St.NavItem>

      <St.NavItem
        onClick={() => {
          setShowMobileNav(false);
          handleConnectClick();
        }}
      >
        {!active ? "CONNECT" : "CONNECTED"}
      </St.NavItem>
    </St.NavLinksDiv>
  );
};

export default NavLinks;
