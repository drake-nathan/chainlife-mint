import styled from "styled-components";

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
    position: relative;
    cursor: pointer;
  }

  /*== common styles for both parts of tool tip ==*/
  .tool::after {
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0;
  }

  .tool:hover::after {
    opacity: 1;
  }

  /*== bubble ==*/

  .tool::after {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.65s;
    background: rgba(244, 245, 240, 0.85);
    padding: 1em;
    width: 175px;
    //transform: scale(0.6) translateY(140px);
    height: 35px;
    content: attr(data-tip);
    color: #3a3a3a;
    font-weight: 600;
    font-size: 16px;
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
    justify-content: center;
    align-items: center;
    gap: 3em;
    padding-top: 0;
    padding-right: 0px;
    padding-bottom: 25px;
    padding-left: 0px;
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
    justify-content: center;
    align-items: center;
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
    flex-direction: column;
    gap: 2rem;
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    width: 360px;

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

export const TitleAndCryptoContainer = styled.div`
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
    align-items: center;
    margin-bottom: -12px;
    width: 350px;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.textOffset};
  font-size: 18px;
`;

export const SubTitle = styled.h3``;

export const DescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 128px;
  height: 650px;
  align-items: center;

  @media (max-width: 1750px) {
    margin-top: 0px;
    padding-right: 2rem;
    padding-left: 2rem;
    width: 80%;
    height: 350px;
  }
`;
