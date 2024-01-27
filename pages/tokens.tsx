/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextPage } from "next";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import { type QueryFunctionContext, useInfiniteQuery } from "react-query";

import CollectionGrid from "components/Collection/Grid/Grid";
import CollectionMenu from "components/Collection/Menu/Menu";
import NavBar from "components/NavBar/NavBar";
import { useChain } from "hooks/useChain";
import { fetchCollectionTokens, fetchProject } from "services/azureApi/fetches";
import {
  Chain,
  type CollectionResponse,
  type IProject,
} from "services/azureApi/types";
import * as St from "styles/tokens.styled";

const Collection: NextPage = () => {
  const { chainId } = useChain();
  const chainlifeSlug =
    chainId === Chain.goerli ? "chainlife-testnet" : "chainlife";

  const [project, setProject] = useState<IProject | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [sortType, setSortType] = useState<"tokenId" | "worldLevel">("tokenId");
  const [tokenSearchId, setTokenSearchId] = useState<null | number>(null);
  const [currentLength, setCurrentLength] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const limit = 20;

  const fetchQuery = ({ pageParam: skip }: QueryFunctionContext) =>
    fetchCollectionTokens(
      chainlifeSlug,
      limit,
      skip as number,
      sortDir,
      sortType,
      tokenSearchId,
    );

  const { data, error, fetchNextPage, isLoading, refetch } = useInfiniteQuery<
    CollectionResponse,
    Error
  >("tokens", fetchQuery, {
    getNextPageParam: (lastFetch) => lastFetch.skip + limit,
  });

  useEffect(() => {
    fetchProject("chainlife").then(setProject).catch(console.error);
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
    void refetch();
  }, [refetch, sortDir, sortType]);

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta content="Chainlife." name="description" />
      </Head>
      <NavBar />

      <CollectionMenu
        project={project}
        refetch={refetch as any}
        setSortDir={setSortDir}
        setSortType={setSortType}
        setTokenSearchId={setTokenSearchId}
        sortDir={sortDir}
        sortType={sortType}
        tokenSearchId={tokenSearchId}
      />
      <CollectionGrid
        currentLength={currentLength}
        data={data}
        error={error}
        fetchNextPage={fetchNextPage as any}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </St.AppContainer>
  );
};

export default Collection;
