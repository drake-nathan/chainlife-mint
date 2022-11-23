import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import CollectionGrid from 'components/Collection/Grid/Grid';
import { IProject } from 'services/azureApi/types';
import * as St from 'styles/collection.styled';
import { fetchProject } from 'services/azureApi/fetches';
import CollectionStats from 'components/Collection/Stats/Stats';

const Collection: NextPage = () => {
  const router = useRouter();
  const { projectSlug } = router.query;

  const [project, setProject] = useState<IProject | null>(null);

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
      {!project ? (
        <h1>Project not found</h1>
      ) : (
        <>
          <CollectionStats project={project} />
          <CollectionGrid />
        </>
      )}
    </St.AppContainer>
  );
};

export default Collection;
