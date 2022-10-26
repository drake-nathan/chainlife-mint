import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {transform: translateY(-100%);}
  100% {transform: translateY(0px)};
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background: ${(props) => props.theme.colors.textMain};
  color: ${(props) => props.theme.colors.bgMain};
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding-right: 30px;
  padding-left: 30px;
  margin-bottom: 30px;
  animation-name: ${slideDown};
  animation-duration: 0.3s;
`;

export const Gap = styled.div`
  width: 100%;
`;

export const logoDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  font-size: 20px;
  width: 100%;
  @media (max-width: 675px) {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 6rem;
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

export const SocialContainer = styled(NavContainer)`
  display: flex;
  padding-top: 40px;
  padding-left: 0;
  padding-right: 0;
  height: fit-content;
  width: fit-content;
  gap: 1.5em;
  color: ${(props) => props.theme.colors.bgMain};
  @media (max-width: 1000px) {
    margin-left: 225px;
  }
  @media (max-width: 675px) {
    margin-left: 0px;
  }
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.bgMain};

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const NavConnect = styled.button`
  color: ${(props) => props.theme.colors.bgMain};
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
