import React from 'react';
import Link from 'next/link';
import * as St from './NavLinks.styled';

interface Props {
  handleMarketsClick: () => void;
  handleConnectClick: () => void;
  active: boolean;
}

const NavLinks: React.FC<Props> = ({
  handleMarketsClick,
  handleConnectClick,
  active,
}) => {
  return (
    <St.NavLinksDiv>
      <Link href="/mint">
        <St.NavItem>MINT</St.NavItem>
      </Link>

      <Link href="/collection/chainlife">
        <St.NavItem>COLLECTION</St.NavItem>
      </Link>

      <Link href="/world">
        <St.NavItem>WORLD</St.NavItem>
      </Link>

      <a href="https://docs.chainlife.xyz/" rel="noreferrer" target="_blank">
        <St.NavItem>DOCS</St.NavItem>
      </a>

      <St.NavItem onClick={handleMarketsClick}>LINKS</St.NavItem>

      <St.NavItem onClick={handleConnectClick}>
        {!active ? 'CONNECT' : 'CONNECTED'}
      </St.NavItem>
    </St.NavLinksDiv>
  );
};

export default NavLinks;
