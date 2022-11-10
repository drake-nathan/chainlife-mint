import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 3em;
  min-height: 100px;
  margin-bottom: 30px;

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    height: fit-content;
    margin-bottom: 20px;
    margin-top: 2em;
    padding-left: 10px;
    padding-right: 10px;
  }

  h5 {
    color: ${(props) => props.theme.colors.textOffset};
  }
`;

export const MobileNavContainer = styled(NavContainer)`
  flex-direction: column;
  padding-top: 8rem;
  position: absolute;
  top: 10.5rem;
  z-index: 10;
  height: 825px;
  background: ${(props) => props.theme.colors.bgMain};
`;

export const Gap = styled.div`
  width: 100%;
`;

export const logoDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
  font-size: 20px;
  @media (max-width: 1300px) {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 8.5rem;
    margin-left: -30px;
  }
  @media (max-width: 850px) {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 10.5rem;

    h1 {
      font-size: 28px;
    }

    h5 {
      font-size: 14px;
    }
  }

  @media (max-width: 500px) {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 10.5rem;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.1em;

    h5 {
      margin-top: -8px;
    }
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
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    gap: 1.25em;
  }
`;

export const SocialsAndLinks = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1300px) {
    justify-content: space-between;
  }

  @media (min-width: 1300px) {
    justify-content: flex-end;
    width: 60%;
    gap: 1.5em;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
  }
`;

export const MobileNavLinksDiv = styled(NavLinksDiv)`
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

export const SocialContainer = styled(NavContainer)`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-left: 0;
  padding-right: 0;
  height: fit-content;
  width: fit-content;
  gap: 1.5em;

  @media (max-width: 1200px) {
    flex-direction: row;
  }

  @media (max-width: 850px) {
    margin-top: -0.75rem;
  }
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.textMain};

  :hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
  #youtube {
    :hover {
      color: ${(props) => props.theme.colors.textMain};
    }
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

  @media (max-width: 675px) {
    font-size: 16px;
  }

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const MobileNavConnect = styled(NavConnect)`
  font-size: 2rem;
`;
