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
  padding-bottom: 150px;

  #main-subtitle {
    cursor: default;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
  gap: 3rem;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: 1300px) {
    margin-top: 5.5rem;

    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 825px) {
    margin-top: 7.5rem;

    h1 {
      font-size: 26px;
    }
  }

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
  height: fit-content;
  width: 80%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.textOffset};
  text-align: center;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 15px;
  }

  @media (max-width: 550px) {
    max-width: 350px;
    font-size: 17px;
    line-height: 2rem;
  }
`;

export const WorldViewInfo = styled.h1`
  text-align: center;
  font-size: 40px;
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

  a {
    color: #3a3a3a;
    text-decoration: underline;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const FrameDiv = styled.div`
  width: 100%;
  margin-top: -18px;

  iframe {
    width: 100%;
    height: 55vh;

    @media (min-width: 1000px) {
      height: 75vh;
    }
  }
`;

export const CopyRightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 30px;
`;
