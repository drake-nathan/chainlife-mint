import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  gap: 5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  width: 80%;
  box-shadow: 5px 7px 14px -2px rgba(58, 58, 58, 0.61);
  -webkit-box-shadow: 5px 7px 14px -2px rgba(58, 58, 58, 0.61);
  -moz-box-shadow: 5px 7px 14px -2px rgba(58, 58, 58, 0.61);
  padding: 60px;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 1300px) {
    margin-top: 5.5rem;
  }
  @media (max-width: 750px) {
    padding: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 95vw;
    margin-top: 8.5rem;
  }
  @media (max-width: 600px) {
    background: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    width: 100vw;
    margin-bottom: 0px;
  }
`;

export const TokenFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FooterContainer = styled(HeaderContainer)`
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TokenHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.75rem;

  @media (max-width: 500px) {
    width: 365px;
  }
`;

export const Expand = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textMain};

  .mobile {
    margin-left: -0.3rem;
    font-size: 25.5px;
  }

  .expand {
    font-size: 29px;
  }
`;

export const MarketLinks = styled(TokenFooter)`
  margin-bottom: 0px;
  flex-direction: row-reverse;
`;

export const TokenTitle = styled.h1`
  font-size: 1.5rem;
  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

export const SubtleTitle = styled.h2`
  color: ${(props) => props.theme.colors.textMain};
  font-weight: 300;
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 1.125rem;
  }
`;

export const TokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: fit-content;

  @media (max-width: 1300px) {
    margin-top: 3.5em;
  }
`;

export const FrameContainer = styled.div`
  aspect-ratio: 1;

  /* @media (max-width: 1150px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 500px) {
    min-width: 0;
    max-width: 300px;
    margin-bottom: 2rem;
  } */

  iframe {
    width: 850px;
    height: 850px;
    @media (max-width: 1150px) {
      width: 650px;
      height: 650px;
    }
    @media (max-width: 1000px) {
      width: 550px;
      height: 550px;
    }
    @media (max-width: 750px) {
      width: 450px;
      height: 450px;
    }
    @media (max-width: 500px) {
      width: 365px;
      height: 365px;
    }
  }
`;

export const ControlsAndTraits = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: inherit;
  gap: 8rem;
  max-width: 1650px;

  @media (max-width: 1750px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
