import styled from 'styled-components';
import { Main } from 'styles/Library/Button.styled';
import { ModalBackground } from '../Modals.styled';

export const BuyModalBackground = styled(ModalBackground)`
  z-index: 10;
`;

export const BuyModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  background-color: ${(props) => props.theme.colors.bgMain};
  border: 3px solid ${(props) => props.theme.colors.textMain};
  padding: 1.75em 1.5em;
  z-index: 40;
  min-width: 300px;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  max-width: 25ch;
`;

export const Title = styled(Text)`
  font-size: 2rem;
  font-weight: 500;
`;

export const SubtleText = styled(Text)`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textOffset};
`;

export const Input = styled.input`
  min-height: 65px;
  min-width: 300px;
  padding: 0.5em;
  border: 3px solid ${(props) => props.theme.colors.textOffset};
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.textOffset};
  text-align: left;
  font-size: 0.875rem;
  text-align: center;

  :focus::placeholder {
    color: transparent;
  }
`;

export const Button = styled(Main)``;
