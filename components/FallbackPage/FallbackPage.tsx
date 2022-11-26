import React from 'react';
import Image from 'next/image';
import { useWindowSize } from 'hooks/useWindowSize';
import { IoLogoYoutube } from 'react-icons/io';
import * as St from './Fallback.Syled';
import Link from 'next/link';

const FallbackPage: React.FC = () => {
  const { windowWidth } = useWindowSize();

  return (
    <>
      <St.FallbackContainer>
        <St.LogoContainer>
          <Image
            src={'/chainlife/chainlife.png'}
            height={windowWidth > 600 ? '60' : '40'}
            width={windowWidth > 600 ? '60' : '40'}
            alt="ChainLife logo"
          />
          <St.CLTitle>Chainlife</St.CLTitle>
        </St.LogoContainer>
        <St.LogoContainer>
          <a href="https://twitter.com/MonkMatto" target="blank" rel="noreferrer">
            <Image src={'/icons/Twitter.svg'} height={21} width={21} alt="logo" />
          </a>
          <a href="https://discord.com/invite/AQDwjAa3g2" target="blank" rel="noreferrer">
            <Image
              src={'/icons/Discord-Logo-White.svg'}
              height={24}
              width={24}
              alt="logo"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCZGHO8oZZcvgdXVyDv-majg/featured"
            target="blank"
            rel="noreferrer"
          >
            <IoLogoYoutube id="youtube" style={{ height: '24px', width: '24px' }} />
          </a>
        </St.LogoContainer>
        <St.Text>The mint you are trying access is not currently active.</St.Text>
        <Link href="/">
          <St.BackLink>Chainlife Home</St.BackLink>
        </Link>
      </St.FallbackContainer>
    </>
  );
};

export default FallbackPage;
