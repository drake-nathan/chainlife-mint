import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50px;
  justify-content: space-between;
  padding: 0 3em;
  ${({ theme }) => !theme.isMobile && "min-height: 100px;"}

  h5 {
    color: ${(props) => props.theme.colors.textOffset};
  }

  @media (max-width: 1030px) {
    ${({ theme }) => !theme.isMobile && "flex-direction: column-reverse;"}
    height: fit-content;
    margin-top: 2em;
    margin-bottom: 20px;
    padding: ${({ theme }) => (theme.isMobile ? "0 1.5em" : "0 1em")};
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
  min-width: 50px;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
`;

export const NavTitle = styled.h1`
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const SocialsAndLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
`;
