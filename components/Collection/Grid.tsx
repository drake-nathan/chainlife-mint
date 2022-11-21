import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCollectionTokens } from 'services/azureApi/fetches';
import { CollectionResponse } from 'services/azureApi/types';
import * as St from './Grid.styled';

const CollectionGrid: React.FC = () => {
  const [limit, setLimit] = useState(16);
  const [skip, setSkip] = useState(0);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const fetchCallback = () => fetchCollectionTokens('chainlife', limit, skip, sortDir);

  const { data, error, isLoading } = useQuery<CollectionResponse, Error>(
    'tokens',
    fetchCallback,
  );

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [data]);

  return (
    <St.Container>{data ? <St.H1>Grid</St.H1> : <St.H1>Loading...</St.H1>}</St.Container>
  );
};

export default CollectionGrid;
