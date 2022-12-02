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
  height: 40px;
  width: 300px;
  padding: 0.5em;
  border: 3px solid ${(props) => props.theme.colors.textOffset};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: left;
  outline: none;
  font-size: 1.125rem;

  :focus::placeholder {
    color: transparent;
  }

  :hover {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const ErrorText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;
