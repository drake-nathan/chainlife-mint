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

      <St.BodyContainer>
        <St.TopSection>
          <St.TitleRow>
            <St.Title>Welcome to Chainlife!</St.Title>

            <Link href="/mint">
              <St.Button>Mint Here</St.Button>
            </Link>
          </St.TitleRow>

          <St.SubTitle id="main-subtitle">
            Below is a randomly generated output from the chainlife algorithm. Click on it
            to activate it.
          </St.SubTitle>
        </St.TopSection>

        <St.FrameDiv>
          <iframe
            src="https://api.gengames.io/generaterandomchainlife"
            title="random generator"
            frameBorder="0"
          ></iframe>
        </St.FrameDiv>

        <St.NotesSection>
          <St.SubTitle>
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
              <a>world,</a>
            </Link>{' '}
            or enter a token id in the form below.
          </St.SubTitle>
        </St.NotesSection>

        <TokenIdForm />
      </St.BodyContainer>
    </St.AppContainer>
  );
};

export default Home;
