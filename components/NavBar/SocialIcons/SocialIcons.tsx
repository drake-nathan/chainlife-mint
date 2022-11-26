import React from 'react';
import * as St from './SocialIcons.styled';

const SocialIcons: React.FC = () => {
  return (
    <St.Container>
      <a href="https://twitter.com/MonkMatto" target="_blank" rel="noreferrer">
        <St.TwitterIcon className="icon" />
      </a>
      <a href="https://discord.com/invite/AQDwjAa3g2" target="_blank" rel="noreferrer">
        <St.DiscordIcon className="icon" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCZGHO8oZZcvgdXVyDv-majg/featured"
        target="_blank"
        rel="noreferrer"
      >
        <St.YoutubeIcon className="icon" />
      </a>
    </St.Container>
  );
};

export default SocialIcons;
