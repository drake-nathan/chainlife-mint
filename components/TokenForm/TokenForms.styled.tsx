import styled from 'styled-components';
import { Main } from 'styles/Library/Button.styled';
import {
  SectionTitleContainer,
  Title as DescTitle,
} from '../DescriptionSections/Description.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5em;
  margin: 1em 0;
`;

export const TitleDiv = styled(SectionTitleContainer)`
  justify-content: center;
  width: 100%;
`;

export const Title = styled(DescTitle)``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  max-width: 95%;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 1.5em;
    width: 100%;
  }
`;

export const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 100%;
  min-width: 95%;
  padding: 0.5em;
  border: 2px solid ${(props) => props.theme.colors.textOffset};
  border-right: none;
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  font-size: 1.25rem;

  @media (max-width: 500px) {
    height: 65px;
    width: 100%;
    border-right: 2px solid ${(props) => props.theme.colors.textOffset};
  }

  :focus::placeholder {
    color: transparent;
  }
`;

export const Button = styled(Main)``;

export const ErrorText = styled.p``;

export const IdFormLabel = styled.h4`
  color: ${(props) => props.theme.colors.textMain};
`;

export const Asterisk = styled.p`
  color: ${(props) => props.theme.colors.textOffset};
  font-size: 13px;
  margin-top: 4px;
  font-style: italic;
`;

export const SmallButton = styled(Button)`
  min-height: 30px;
  min-width: 30px;
  height: 37px;
  width: 37px;
  font-size: 25px;
  padding: 0;
  margin-left: -10px;
`;
