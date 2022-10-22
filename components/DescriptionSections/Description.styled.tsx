import styled from 'styled-components';
import { Main } from 'styles/Library/Button.styled';

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
  justify-content: space-evenly;
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
`;

export const SubtleText = styled.span`
  color: ${(props) => props.theme.colors.textOffset};
  font-size: 18px;
`;

export const Button = styled(Main)``;
