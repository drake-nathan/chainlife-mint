import styled from 'styled-components';
import { Main } from 'styles/Library/Button.styled';
import {
  SectionTitleContainer,
  Title as DescTitle,
} from './Description.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-right: 15px;
  gap: 1.5em;
`;
export const TitleDiv = styled(SectionTitleContainer)``;

export const Title = styled(DescTitle)``;

export const Form = styled.form`
  display: flex;
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
