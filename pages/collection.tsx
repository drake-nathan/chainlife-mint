import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import * as St from 'styles/collection.styled';

const Collection: NextPage = () => {
  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife." />
      </Head>

      <NavBar />
    </St.AppContainer>
  );
};

export default Collection;
