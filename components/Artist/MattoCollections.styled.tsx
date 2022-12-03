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

  background: rgba(0, 0, 0, 0.8);
`;
