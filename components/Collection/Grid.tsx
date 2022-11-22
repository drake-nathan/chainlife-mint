import React, { useEffect, useState } from 'react';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { fetchCollectionTokens } from 'services/azureApi/fetches';
import { CollectionResponse } from 'services/azureApi/types';
import * as St from './Grid.styled';

const CollectionGrid: React.FC = () => {
  const [limit, setLimit] = useState(16);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const fetchCallback = ({ pageParam: skip }: QueryFunctionContext) =>
    fetchCollectionTokens('chainlife', limit, skip, sortDir);

  const { data, error, isLoading } = useInfiniteQuery<CollectionResponse, Error>(
    'tokens',
    fetchCallback,
    {
      getNextPageParam: (lastFetch) => lastFetch.skip,
    },
  );

  useEffect(() => {
    if (error) console.error(error.message);
  }, [data, error]);

  return (
    <St.Container>{data ? <St.H1>Grid</St.H1> : <St.H1>Loading...</St.H1>}</St.Container>
  );
};

export default CollectionGrid;
