import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import CollectionMenu from 'components/Collection/Menu/Menu';
import CollectionGrid from 'components/Collection/Grid/Grid';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { Chain, CollectionResponse, IProject } from 'services/azureApi/types';
import { fetchCollectionTokens, fetchProject } from 'services/azureApi/fetches';
import { useChain } from 'hooks/useChain';
import * as St from 'styles/collection.styled';

const Collection: NextPage = () => {
  const { chainId } = useChain();
  const chainlifeSlug = chainId === Chain.goerli ? 'chainlife-testnet' : 'chainlife';

  const [project, setProject] = useState<IProject | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [sortType, setSortType] = useState<'tokenId' | 'worldLevel'>('tokenId');
  const [tokenSearchId, setTokenSearchId] = useState<number | null>(null);
  const [currentLength, setCurrentLength] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const limit = 20;

  const fetchQuery = ({ pageParam: skip }: QueryFunctionContext) =>
    fetchCollectionTokens(chainlifeSlug, limit, skip, sortDir, sortType, tokenSearchId);

  const { error, data, isLoading, fetchNextPage, refetch } = useInfiniteQuery<
    CollectionResponse,
    Error
  >('tokens', fetchQuery, { getNextPageParam: (lastFetch) => lastFetch.skip + limit });

  useEffect(() => {
    fetchProject('chainlife')
      .then((res) => {
        if (res) setProject(res);
      })
      .catch(console.error);
  }, []);

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
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife." />
      </Head>
      <NavBar />

      <CollectionMenu
        project={project}
        sortDir={sortDir}
        setSortDir={setSortDir}
        sortType={sortType}
        setSortType={setSortType}
        tokenSearchId={tokenSearchId}
        setTokenSearchId={setTokenSearchId}
        refetch={refetch}
      />
      <CollectionGrid
        data={data}
        currentLength={currentLength}
        hasMore={hasMore}
        fetchNextPage={fetchNextPage}
        error={error}
        isLoading={isLoading}
      />
    </St.AppContainer>
  );
};

export default Collection;
