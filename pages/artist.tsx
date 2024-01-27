import type { NextPage } from "next";

import Head from "next/head";
import React from "react";

import MattoCollections from "components/Artist/MattoCollections";
import { bio } from "components/Artist/artistData";
import NavBar from "components/NavBar/NavBar";
import * as St from "styles/artist.styled";

const Collection: NextPage = () => {
  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta content="Chainlife." name="description" />
      </Head>
      <NavBar />

      <St.ArtistContainer>
        <St.TitleSection>
          <St.Title>MATTO</St.Title>
        </St.TitleSection>

        <St.HeroSection>
          <St.MattoImg alt="Matto" src="/matto.jpeg" />

          <St.BioText>{bio}</St.BioText>
        </St.HeroSection>

        <MattoCollections />
      </St.ArtistContainer>
    </St.AppContainer>
  );
};

export default Collection;
