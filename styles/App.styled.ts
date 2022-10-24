import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 100px;
  max-width: 1920px;
  gap: 7rem;

  @media (max-width: 1700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`;

export const LeftSection = styled.div`
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    background: yellow;
    gap: 2rem;
  }
`;

export const SliderAndIframeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TitleAnCryptoContainer = styled.div`
  width: 650px;
  height: 100px;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: pink;
    min-height: 150px;
    max-width: 350px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const Title = styled.h1``;

export const SubTitle = styled.h3``;

export const DescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 75px;
  width: 650px;
  @media (max-width: 750px) {
    width: 360px;
  }
`;

export const InfoText = styled.p`
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
`;
