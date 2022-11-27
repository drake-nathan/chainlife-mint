import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import CollectionMenu from 'components/Collection/Menu/Menu';
import CollectionGrid from 'components/Collection/Grid/Grid';
import { IProject } from 'services/azureApi/types';
import { fetchProject } from 'services/azureApi/fetches';
import * as St from 'styles/collection.styled';

const Collection: NextPage = () => {
  const router = useRouter();
  const { projectSlug } = router.query;

  const [project, setProject] = useState<IProject | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [sortType, setSortType] = useState<'tokenId' | 'worldLevel'>('tokenId');

  useEffect(() => {
    if (projectSlug) {
      fetchProject(projectSlug as string)
        .then((res) => {
          if (res) setProject(res);
        })
        .catch(console.error);
    }
  }, [projectSlug]);

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife." />
      </Head>
      <NavBar />
      {projectSlug && (
        <>
          <CollectionMenu
            project={project}
            sortDir={sortDir}
            setSortDir={setSortDir}
            sortType={sortType}
            setSortType={setSortType}
          />
          <CollectionGrid
            projectSlug={projectSlug as string}
            sortDir={sortDir}
            sortType={sortType}
          />
        </>
      )}
    </St.AppContainer>
  );
};

export default Collection;
