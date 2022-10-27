import styled, { keyframes } from 'styled-components';

export const FadeIn = keyframes`0% {opacity: 0;}
100% {opacity: 100;}`;

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
  padding: 60px 100px;
  max-width: 1920px;
  gap: 7rem;
  width: 100%;

  @media (max-width: 1700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 3rem;
    padding-bottom: 25px;
  }
`;

export const WorldViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
  gap: 3rem;

  p {
    cursor: pointer;
    animation-name: ${FadeIn};
    animation-duration: 1s;
  }
`;

export const InstructionsContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
`;

export const Expand = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 34px;
  margin-bottom: -12px;
`;

export const ViewInstructions = styled.p`
  color: ${(props) => props.theme.colors.textOffset};
  font-weight: 500;
  font-size: 18px;
`;

export const StepContainer = styled.div`
  position: absolute;
  top: 10%;
  z-index: 20;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  font-size: 16px;
  background: rgba(244, 245, 240, 0.95);
  max-width: 650px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  animation-name: ${FadeIn};
  animation-duration: 1s ease-in-out;
  @media (max-width: 550px) {
    font-size: 14px;
    max-width: 350px;
  }
`;

export const Step = styled.p``;

export const LeftSection = styled.div`
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // gap: 4.5rem;
  }
`;

export const SliderAndIframeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 1.5rem;
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
    justify-content: center;
    align-items: center;
    max-width: 350px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 750px) {
    margin-bottom: -12px;
    width: 350px;
    align-items: center;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.textOffset};
  font-size: 18px;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const WorldViewTitle = styled(Title)`
  max-width: 800px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 550px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const WorldViewInfo = styled.h1`
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.h3`
  @media (max-width: 500px) {
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
  }
`;

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
  text-align: left;
  padding-left: 80px;
  padding-right: 80px;
  @media (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const NotesTitle = styled(SubTitle)`
  color: ${(props) => props.theme.colors.textMain};
`;

export const NotesText = styled.p``;

export const DescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 128px;
  height: 650px;
  align-items: center;
  @media (max-width: 1700px) {
    margin-top: 0px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
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
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    gap: 2rem;
    flex-direction: column;

    button {
      max-width: 225px;
    }
  }
`;

export const InfoText = styled.p`
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
  @media (max-width: 750px) {
    font-size: 15px;
  }
`;
