import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 3em;
  ${({ theme }) => !theme.isMobile && 'min-height: 100px;'}

  h5 {
    color: ${(props) => props.theme.colors.textOffset};
  }

  @media (max-width: 1030px) {
    ${({ theme }) => !theme.isMobile && 'flex-direction: column-reverse;'}
    height: fit-content;
    margin-bottom: 20px;
    margin-top: 2em;
    padding: ${({ theme }) => (theme.isMobile ? '0 1.5em' : '0 1em')};
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
  min-width: 50px;

  /* @media (max-width: 1300px) {
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
  } */
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;

  /* @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.1em;

    h5 {
      margin-top: -8px;
    }
  } */
`;

export const NavTitle = styled.h1`
  :hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
`;

export const SocialsAndLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;

  /* @media (max-width: 1300px) {
    justify-content: space-between;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
  } */
`;
