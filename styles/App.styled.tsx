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

  @media (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftSection = styled.div``;

export const SliderAndIframeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
`;

export const TitleAnCryptoContainer = styled.div`
  width: 650px;
  height: 100px;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  button {
    margin-right: -52px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
`;

export const InfoText = styled.p`
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
`;
