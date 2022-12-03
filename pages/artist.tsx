import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import MattoCollections from 'components/Artist/MattoCollections';
import { bio } from 'components/Artist/bio';
import * as St from 'styles/artist.styled';

const Collection: NextPage = () => {
  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife." />
      </Head>
      <NavBar />

      <St.ArtistContainer>
        <St.TitleSection>
          <St.Title>MATTO</St.Title>
        </St.TitleSection>

        <St.HeroSection>
          <St.MattoImg src="/matto.jpeg" alt="Matto" />

          <St.BioText>{bio}</St.BioText>
        </St.HeroSection>

        <MattoCollections />
      </St.ArtistContainer>
    </St.AppContainer>
  );
};

export default Collection;
