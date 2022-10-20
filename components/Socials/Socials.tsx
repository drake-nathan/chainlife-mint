import React from 'react';
import Image from 'next/image';
import Twitter from '../../public/icons/Twitter.svg';
import Discord from '../../public/icons/Discord-Logo-White.svg';
import * as St from './Socials.styled';

const Socials: React.FC = () => (
  <>
    <St.SocialsContainer>
      <St.SocialLink
        href="https://twitter.com/MonkMatto"
        target="blank"
        rel="noreferrer"
      >
        <Image src={Twitter} height={26} width={26} alt="logo" />
      </St.SocialLink>
      <St.SocialLink
        href="https://discord.com/invite/AQDwjAa3g2"
        target="blank"
        rel="noreferrer"
      >
        <Image src={Discord} height={30} width={30} alt="logo" />
      </St.SocialLink>
      <St.SocialLinksDiv />
    </St.SocialsContainer>
  </>
);

export default Socials;
