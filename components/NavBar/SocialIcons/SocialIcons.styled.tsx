import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme.isMobile ? "3em" : "1.75em")};

  .icon {
    vertical-align: bottom;
    color: ${(props) => props.theme.colors.textMain};
    font-size: ${({ theme }) => (theme.isMobile ? "2rem" : "1.5rem")};

    :hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.hover};
    }
  }
`;

export const TwitterIcon = styled(AiFillTwitterCircle)``;

export const DiscordIcon = styled(SiDiscord)``;

export const YoutubeIcon = styled(IoLogoYoutube)``;
