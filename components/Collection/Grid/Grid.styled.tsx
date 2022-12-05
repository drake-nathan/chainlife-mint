import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  margin-bottom: 3em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;
`;

export const H1 = styled.h1`
  margin-top: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 0.75em;
  }
`;
