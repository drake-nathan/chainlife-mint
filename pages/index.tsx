import React from 'react';
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
            'Below is a randomly generated output from the chainlife algorithm. Click on it to activate it.'
          }{' '}
        </St.Title>

        <St.InstructionsContainer>
          <St.FrameDiv>
            <iframe
              src="https://api.gengames.io/generaterandomchainlife"
              title="random generator"
              frameBorder="0"
            ></iframe>
          </St.FrameDiv>
        </St.InstructionsContainer>

        <St.NotesContainer>
          <St.Title>
            Chainlife is a rich and complex on-chain project. Learn more in the{' '}
            <a
              href="https://docs.chainlife.xyz/start-here/introduction"
              target="blank"
              rel="noreferrer"
            >
              docs,
            </a>{' '}
            explore the{' '}
            <Link href="/world" target="blank" rel="noreferrer">
              <a>world.</a>
            </Link>{' '}
            or enter a token id in the form below.
          </St.Title>
        </St.NotesContainer>

        <TokenIdForm />
      </St.HeroContainer>
    </St.AppContainer>
  );
};

export default Home;
