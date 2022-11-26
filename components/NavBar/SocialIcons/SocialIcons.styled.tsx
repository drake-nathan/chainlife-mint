import styled from 'styled-components';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { IoLogoYoutube } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75em;

  .icon {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.textMain};
    vertical-align: bottom;

    :hover {
      color: ${(props) => props.theme.colors.hover};
      cursor: pointer;
    }
  }
`;

export const TwitterIcon = styled(AiFillTwitterCircle)``;

export const DiscordIcon = styled(SiDiscord)``;

export const YoutubeIcon = styled(IoLogoYoutube)``;
