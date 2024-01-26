import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  padding-bottom: 150px;
`;

export const ArtistContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  margin-top: 3em;
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.textOffset};
`;

export const HeroSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4em;
  padding: 0 1em;
`;

export const Title = styled.h1`
  font-weight: 500;
`;

export const MattoImg = styled.img`
  height: 225px;
  width: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const BioText = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  letter-spacing: 0.5px;
`;
