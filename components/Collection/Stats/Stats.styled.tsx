import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1em 3em;

  @media (max-width: 1300px) {
    margin-top: 3em;
  }

  @media (max-width: 800px) {
    margin-top: 4em;
  }

  @media (max-width: 500px) {
    margin-top: 5em;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 600;
`;
