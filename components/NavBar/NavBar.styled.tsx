import styled from 'styled-components';

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 350px auto 500px;
  align-items: center;
  width: 100%;
  position: top;
  top: 0;
  padding-right: 30px;
  height: 100px;
  margin-bottom: 30px;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 50px;
    margin-top: 15px;
    gap: 1.5em;
  }
`;

export const Gap = styled.div`
  width: 100%;
`;

export const logoDiv = styled.div`
  position: absolute;
  top: 25px;
  left: 50px;
  display: flex;
  align-items: center;
  gap: 1.5em;
`;

export const NavTitle = styled.h1``;

export const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  font-weight: 500;
`;

export const SocialContainer = styled(NavContainer)`
  justify-content: flex-start;
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.textMain};

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const NavConnect = styled.button`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 20px;
  font-weight: 500;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;
