import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  /* padding: 0 1em; */
  margin-bottom: 3em;

  @media (max-width: 1300px) {
    margin-top: 2em;
  }

  @media (max-width: 800px) {
    margin-top: 3em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* gap: 1em; */
  margin-top: 30px;
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;
`;

export const H1 = styled.h1``;
