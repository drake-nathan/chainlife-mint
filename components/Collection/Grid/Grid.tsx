import type { InfiniteData } from "react-query";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import type { CollectionResponse } from "services/azureApi/types";

import Card from "../Card/Card";
import * as St from "./Grid.styled";

interface Props {
  currentLength: number;
  data: InfiniteData<CollectionResponse> | undefined;
  error: Error | null;
  fetchNextPage: () => void;
  hasMore: boolean;
  isLoading: boolean;
}

const CollectionGrid: React.FC<Props> = ({
  currentLength,
  data,
  error,
  fetchNextPage,
  hasMore,
  isLoading,
}) => {
  return (
    <St.Container>
      {data ? (
        <InfiniteScroll
          dataLength={currentLength}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          next={fetchNextPage}
        >
          <St.Wrapper>
            {data.pages.map((page) =>
              page.tokens.map((token) => (
                <Card key={token.name} token={token} />
              )),
            )}
          </St.Wrapper>
        </InfiniteScroll>
      ) : error && !isLoading ? (
        <St.H1>Unable to fetch tokens right now.</St.H1>
      ) : (
        <St.H1>Loading...</St.H1>
      )}
    </St.Container>
  );
};

export default CollectionGrid;
