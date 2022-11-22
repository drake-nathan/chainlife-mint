import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { fetchCollectionTokens } from 'services/azureApi/fetches';
import { CollectionResponse } from 'services/azureApi/types';
import * as St from './Grid.styled';

const CollectionGrid: React.FC = () => {
  const [limit, setLimit] = useState(32);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [currentLength, setCurrentLength] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const fetchQuery = ({ pageParam: skip }: QueryFunctionContext) =>
    fetchCollectionTokens('chainlife', limit, skip, sortDir);

  const { error, data, fetchNextPage } = useInfiniteQuery<CollectionResponse, Error>(
    'tokens',
    fetchQuery,
    { getNextPageParam: (lastFetch) => lastFetch.skip + limit },
  );

  useEffect(() => {
    if (error) console.error(error.message);
    if (data) {
      const lastPage = data.pages[data.pages.length - 1];
      setHasMore(lastPage.hasMore);
      setCurrentLength(lastPage.skip + lastPage.tokens.length);
    }
  }, [data, error]);

  return (
    <St.Container>
      {data && (
        <InfiniteScroll
          dataLength={currentLength}
          next={fetchNextPage}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <St.Wrapper>
            {data.pages.map((page) =>
              page.tokens.map((token) => <h1 key={`${token.name}`}>{token.name}</h1>),
            )}
          </St.Wrapper>
        </InfiniteScroll>
      )}
    </St.Container>
  );
};

export default CollectionGrid;
