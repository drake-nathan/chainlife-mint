import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { fetchCollectionTokens } from 'services/azureApi/fetches';
import { CollectionResponse } from 'services/azureApi/types';
import Card from '../Card/Card';
import * as St from './Grid.styled';

interface Props {
  projectSlug: string;
  sortDir: 'asc' | 'desc';
  sortType: 'tokenId' | 'worldLevel';
}

const CollectionGrid: React.FC<Props> = ({ projectSlug, sortDir, sortType }) => {
  const [limit, setLimit] = useState(16);
  const [currentLength, setCurrentLength] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const fetchQuery = ({ pageParam: skip }: QueryFunctionContext) =>
    fetchCollectionTokens(projectSlug, limit, skip, sortDir, sortType);

  const { error, data, fetchNextPage, refetch } = useInfiniteQuery<
    CollectionResponse,
    Error
  >('tokens', fetchQuery, { getNextPageParam: (lastFetch) => lastFetch.skip + limit });

  useEffect(() => {
    if (error) console.error(error.message);
    if (data) {
      const lastPage = data.pages[data.pages.length - 1];
      setHasMore(lastPage.hasMore);
      setCurrentLength(lastPage.skip + lastPage.tokens.length);
    }
  }, [data, error]);

  useEffect(() => {
    refetch();
  }, [sortDir, sortType]);

  return (
    <St.Container>
      {data && (
        <InfiniteScroll
          dataLength={currentLength}
          next={fetchNextPage}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <St.Wrapper>
            {data.pages.map((page) =>
              page.tokens.map((token) => <Card token={token} key={token.name} />),
            )}
          </St.Wrapper>
        </InfiniteScroll>
      )}
    </St.Container>
  );
};

export default CollectionGrid;
