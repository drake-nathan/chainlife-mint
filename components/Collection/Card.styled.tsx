import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5em 0;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background: var(--color-bg-offset);
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.theme.isMobile ? '170px' : '300px')};
  box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.2);
  transition-duration: 400ms;

  :hover {
    transform: scale(1.04);
  }
`;

export const ImageDiv = styled.div`
  position: relative;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;

  padding: ${(props) =>
    props.theme.isMobile ? '10px 15px 15px 15px' : '20px 30px 25px 30px'};
  min-height: 130px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NftName = styled.div`
  color: var(--color-white);
  line-height: 1.2;
  font-size: ${(props) => (props.theme.isMobile ? '1rem' : '1.25rem')};
`;
