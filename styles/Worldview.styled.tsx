import styled, { keyframes } from "styled-components";

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
  padding-bottom: 150px;
`;

export const WorldViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
  gap: 3rem;
  width: 100%;

  #wv-instructions {
    cursor: pointer;
  }

  p {
    cursor: pointer;
    animation-name: ${FadeIn};
    animation-duration: 1s;
  }
`;

export const MobileIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const MobileIconRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 28px;
  min-height: 35px;
  width: 100%;
  gap: 0.75rem;

  @media (max-width: 500px) {
    width: 365px;
  }

  .icon {
    font-size: 24px;
  }
`;

export const InstructionsContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 80%;

  @media (max-width: 500px) {
    width: 100%;
  }
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

export const LeftSection = styled.div`
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  text-align: center;
  width: 80%;
  max-width: 850px;
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 550px) {
    max-width: 350px;
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
  max-width: 1050px;

  @media (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const NotesTitle = styled(SubTitle)`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 18px;
`;

export const NotesText = styled.p`
  /* max-width: 85ch; */
`;

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

  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const FrameDiv = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    height: 55vh;

    @media (min-width: 1000px) {
      height: 75vh;
    }
  }
`;
