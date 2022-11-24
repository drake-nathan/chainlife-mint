import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0.5em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.theme.isMiniCard ? '170px' : '300px')};
  box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 2px 2px;
  transition-duration: 400ms;

  :hover {
    transform: scale(1.04);
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  cursor: pointer;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5em;
  padding: 1em;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
`;

export const Title = styled(Text)`
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
