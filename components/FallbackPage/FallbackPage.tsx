import React from 'react';
import Image from 'next/image';
import { useWindowSize } from 'hooks/useWindowSize';
import { IoLogoYoutube } from 'react-icons/io';
import * as St from './Fallback.Syled';

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
          <St.SocialLink
            href="https://twitter.com/MonkMatto"
            target="blank"
            rel="noreferrer"
          >
            <Image src={'/icons/Twitter.svg'} height={21} width={21} alt="logo" />
          </St.SocialLink>
          <St.SocialLink
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
          </St.SocialLink>
          <St.SocialLink
            href="https://www.youtube.com/channel/UCZGHO8oZZcvgdXVyDv-majg/featured"
            target="blank"
            rel="noreferrer"
          >
            <IoLogoYoutube id="youtube" style={{ height: '24px', width: '24px' }} />
          </St.SocialLink>
        </St.LogoContainer>
        <St.Text>The mint you are trying access is not currently active.</St.Text>
        <St.BackLink href="/">Chainlife Home</St.BackLink>
      </St.FallbackContainer>
    </>
  );
};

export default FallbackPage;
