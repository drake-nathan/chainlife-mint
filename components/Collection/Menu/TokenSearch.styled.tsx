import styled from 'styled-components';

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

export const Input = styled.input`
  height: 37.5px;
  width: 150px;
  padding: 0.5em;
  border: 3px solid ${(props) => props.theme.colors.textOffset};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: left;
  outline: none;

  :focus::placeholder {
    color: transparent;
  }
`;

export const ErrorText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;
