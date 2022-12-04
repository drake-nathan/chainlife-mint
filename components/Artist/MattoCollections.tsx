import React from 'react';
import { collections } from './artistData';
import * as St from './MattoCollections.styled';

const MattoCollections: React.FC = () => {
  return (
    <St.Container>
      <St.TitleBar>
        <St.Title>COLLECTIONS</St.Title>
      </St.TitleBar>

      <St.CollectionContainer>
        {collections.map((collection) => (
          <St.CollectionCard key={collection.name}>
            <St.Thumbnail src={collection.image} />
            <St.TitleDiv>
              <St.CollectionName>{collection.name}</St.CollectionName>
            </St.TitleDiv>
          </St.CollectionCard>
        ))}
      </St.CollectionContainer>
    </St.Container>
  );
};

export default MattoCollections;
