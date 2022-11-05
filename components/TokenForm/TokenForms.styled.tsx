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

  .inactive {
    color: ${(props) => props.theme.colors.textOffset};
  }
`;

export const TitleDiv = styled(SectionTitleContainer)`
  justify-content: center;
  width: 100%;
`;

export const Title = styled(DescTitle)`
  font-weight: 500;
`;

export const SubTitleDiv = styled(TitleDiv)`
  border-bottom: none;

  @media (max-width: 500px) {
    margin-top: -20px;
  }
`;

export const SubTitle = styled(Title)`
  font-size: 24px;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const FormInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  margin-top: -12px;
  margin-bottom: 12px;

  @media (max-width: 500px) {
    margin-top: -18px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const FormInfo = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.textOffset};
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

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
  min-height: 65px;
  min-width: 95%;
  padding: 0.5em;
  border: 3px solid ${(props) => props.theme.colors.textOffset};
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: left;
  font-size: 1.25rem;
  margin-right: 15px;

  @media (max-width: 850px) {
    min-width: 80%;
  }

  @media (max-width: 500px) {
    height: 65px;
    width: 100%;
    text-align: center;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

export const Button = styled(Main)``;

export const Refresh = styled(Button)`
  font-size: 22px;
  margin-left: 4px;
`;

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
