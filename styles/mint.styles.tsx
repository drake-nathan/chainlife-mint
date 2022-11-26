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

  .tool {
    cursor: pointer;
    position: relative;
  }

  /*== common styles for both parts of tool tip ==*/
  .tool::after {
    opacity: 0;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .tool:hover::after {
    opacity: 1;
  }

  /*== bubble ==*/

  .tool::after {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(244, 245, 240, 0.85);
    color: #3a3a3a;
    font-size: 16px;
    font-weight: 600;
    content: attr(data-tip);
    padding: 1em;
    transition: all 0.65s;
    //transform: scale(0.6) translateY(140px);
    height: 35px;
    width: 175px;
  }

  .tool:hover::after,
  .tool:focus::after {
    transition: all 0.65s;
  }
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 100px;
  max-width: 1920px;
  gap: 7rem;
  width: 100%;

  @media (max-width: 1750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3em;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0;
    padding-bottom: 25px;
  }

  @media (max-width: 500px) {
    margin-bottom: 100px;
  }
`;

export const SliderAndIframeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7em;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 1.5em;
  }
`;

export const LeftSection = styled.div`
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  font-size: 20px;

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

  @media (max-width: 1750px) {
    margin-top: 0px;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 80%;
    height: 350px;
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
