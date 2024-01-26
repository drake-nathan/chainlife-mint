import styled from "styled-components";
import { Main } from "styles/Library/Button.styled";
import {
  SectionTitleContainer,
  Title as DescTitle,
} from "../DescriptionSections/Description.styled";

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
  align-items: center;
  gap: 1em;
`;

export const Label = styled.label``;

export const InstructionLabel = styled(Label)`
  padding-left: 12px;
  padding-right: 12px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.35em;
`;

export const Input = styled.input`
  height: 37.5px;
  width: 150px;
  padding: 0.5em;
  border: 3px solid ${(props) => props.theme.colors.textOffset};
  text-align: left;
  font-size: 1.25rem;
  outline: none;

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
  width: 42px;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: 0.1rem;
  box-sizing: border-box;
  padding: 4px;
  background-color: ${(props) => props.theme.colors.textMain};
  color: ${(props) => props.theme.colors.bgMain};

  &:hover {
    font-size: 19px;
    font-weight: 400;
  }
`;
