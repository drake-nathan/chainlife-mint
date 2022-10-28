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
  gap: 1em;
  padding: 0 1em;
`;

export const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  min-height: 30px;
  min-width: 150px;
  padding: 0.5em;
  border: 2px solid ${(props) => props.theme.colors.textOffset};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const Button = styled(Main)``;

export const ErrorText = styled.p``;
