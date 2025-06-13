import React from "react";

import { collections } from "./artistData";
import * as St from "./MattoCollections.styled";

const MattoCollections: React.FC = () => {
  return (
    <St.Container>
      <St.TitleBar>
        <St.Title>COLLECTIONS</St.Title>
      </St.TitleBar>

      <St.CollectionContainer>
        {collections.map((collection) => (
          <a
            href={`https://opensea.io/collection/${collection.openSeaSlug}`}
            key={collection.name}
            rel="noreferrer"
            target="_blank"
          >
            <St.CollectionCard>
              <St.Thumbnail src={collection.image} />
              <St.TitleDiv>
                <St.CollectionName>{collection.name}</St.CollectionName>
              </St.TitleDiv>
            </St.CollectionCard>
          </a>
        ))}
      </St.CollectionContainer>
    </St.Container>
  );
};

export default MattoCollections;
