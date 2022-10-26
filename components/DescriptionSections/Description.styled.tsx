import styled from 'styled-components';
import Countdown from 'react-countdown';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-right: 15px;
  gap: 1.5em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5em;
  gap: 1em;
  width: 35%;
  max-width: 450px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5em;
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
  height: 75px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.textOffset};

  .inactive {
    color: ${(props) => props.theme.colors.textOffset};
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 1.5em;

  @media (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const SubtleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25em;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .one {
    &:after {
      background-image: url('/prayer_emoji_icon.png');
      background-size: 25px 25px;
      display: inline-block;
      width: 25px;
      height: 25px;
      margin-left: 8px;
      content: '';
    }
  }

  .two {
    &:after {
      background-image: url('/brain_emoji_icon.png');
      background-size: 25px 25px;
      display: inline-block;
      width: 25px;
      height: 25px;
      margin-left: 8px;
      content: '';
    }
  }
`;

export const SubtleText = styled.span`
  color: ${(props) => props.theme.colors.textOffset};
  font-size: 18px;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 175px;
  min-height: 65px;
  border: 3px solid ${(props) => props.theme.colors.textMain};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0 0.5em;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.bgMain};
    font-weight: 700;
  }

  @media (max-width: 600px) {
    width: 300px;
    min-width: 150px;
  }
`;
