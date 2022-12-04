import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 400;
`;

export const CollectionContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
  padding: 2em;
  gap: 2em;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
`;

export const CollectionCard = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 1/1;
  transition-duration: 400ms;

  :hover {
    transform: scale(1.07);
  }
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const TitleDiv = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.25em 0.5em;
  border-radius: 1px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const CollectionName = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.bgMain};
`;
