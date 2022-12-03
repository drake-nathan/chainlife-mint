import React from 'react';
import * as St from './MattoCollections.styled';

const MattoCollections: React.FC = () => {
  return (
    <St.Container>
      <St.TitleBar>
        <St.Title>COLLECTIONS</St.Title>
      </St.TitleBar>
      <St.CollectionContainer />
    </St.Container>
  );
};

export default MattoCollections;
