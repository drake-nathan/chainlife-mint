import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 80%;
  gap: 2em;

  @media (max-width: 1300px) {
    margin-top: 1.5em;
  }

  @media (max-width: 825px) {
    margin-top: 3em;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 0 2em;
    margin-top: 5em;
  }
`;

export const TokenHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.textOffset};
  gap: 1em;

  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

export const TokenTitle = styled.h1`
  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

export const SubtleTitle = styled.h2`
  color: ${(props) => props.theme.colors.textOffset};

  @media (max-width: 500px) {
    font-size: 1.125rem;
  }
`;

export const TokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FrameContainer = styled.div`
  min-width: 650px;
  aspect-ratio: 1;

  @media (max-width: 800px) {
    min-width: 500px;
  }

  @media (max-width: 500px) {
    min-width: 0;
    max-width: 300px;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;
