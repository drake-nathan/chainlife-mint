import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {transform: translateY(-200px);}
  100% {transform: translateY(0px)};
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  position: top;
  top: 0;
  padding-right: 30px;
  padding-left: 30px;
  min-height: 100px;
  margin-bottom: 30px;
  @media (max-width: 750px) {
    flex-direction: column-reverse;
    height: fit-content;
    margin-bottom: 20px;
    margin-top: 2rem;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const MobileNavContainer = styled(NavContainer)`
  flex-direction: column;
  padding-top: 8rem;
  position: absolute;
  top: 10.5rem;
  z-index: 10;
  height: 750px;
  background: ${(props) => props.theme.colors.bgMain};
  /* @media (max-width: 500px) {
    height:;
  } */
`;

export const Gap = styled.div`
  width: 100%;
`;

export const logoDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 20px;
  @media (max-width: 1200px) {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 6rem;
    left: 0;
  }
  @media (max-width: 750px) {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 8.5rem;
    left: 0;

    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 500px) {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 9.5rem;
    left: 0;
  }
`;

export const NavTitle = styled.h1``;

export const NavLinksDiv = styled.div`
  display: flex;
  position: relative;
  right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 500;
  gap: 1.5em;
  @media (max-width: 675px) {
    font-size: 16px;
  }
`;

export const MobileNavLinksDiv = styled(NavLinksDiv)`
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

export const SocialContainer = styled(NavContainer)`
  display: flex;
  padding-top: 40px;
  padding-left: 0;
  padding-right: 0;
  height: fit-content;
  width: fit-content;
  gap: 1.5em;
  @media (max-width: 1200px) {
    flex-direction: row;
  }
  @media (max-width: 750px) {
    margin-top: -0.75rem;
  }
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.textMain};

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const MobileNavLink = styled(NavLink)`
  font-size: 2rem;
`;

export const NavConnect = styled.button`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 20px;
  font-weight: 500;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 16px;
  }

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const MobileNavConnect = styled(NavConnect)`
  font-size: 2rem;
`;
