import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from 'components/NavBar/NavBar';
import TokenIdForm from 'components/TokenForm/TokenIdForm';
import * as St from '../styles/App.styled';

const Home: NextPage = () => {
  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife" />
      </Head>

      <NavBar />

      <St.HeroContainer>
        <St.WorldViewInfo>Welcome to Chainlife!</St.WorldViewInfo>

        <St.Title id="main-subtitle">
          {
            "This is a fully random, but actually minted Chainlife token. Click on it to activate it, then if you'd like a list of hotkeys, press"
          }{' '}
          <strong>{"'H'."}</strong>
        </St.Title>

        <St.InstructionsContainer>
          <St.FrameDiv>
            <iframe
              src="https://chainlife.art/"
              title="random generator"
              frameBorder="0"
            ></iframe>
          </St.FrameDiv>
        </St.InstructionsContainer>

        <St.NotesContainer>
          <St.Title>
            There is much more to Chainlife than any single token. Together, the entire
            collection forms a 3D world. Learn more in the{' '}
            <a
              href="https://chainlife.gitbook.io/docs/start-here/introduction"
              target="blank"
              rel="noreferrer"
            >
              docs,
            </a>{' '}
            or explore the{' '}
            <Link href="/world" target="blank" rel="noreferrer">
              <a>world.</a>
            </Link>
          </St.Title>
        </St.NotesContainer>

        <TokenIdForm />
      </St.HeroContainer>
    </St.AppContainer>
  );
};

export default Home;
