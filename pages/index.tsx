import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import * as Steps from 'helpers/worldviewInstructions';
import { generatorURLs } from 'helpers/iFrameMedia';
import { useWindowSize } from 'hooks/useWindowSize';
import * as St from '../styles/App.styled';

const Home: NextPage = () => {
  const { windowWidth } = useWindowSize();
  const [activeStep, setActiveStep] = useState(1);

  const generateRandomImage = (arr: string[]) => {
    return arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : arr[0];
  };

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife Mint</title>
        <meta name="description" content="Chainlife Mint." />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <NavBar />
      <St.WorldViewContainer>
        <St.WorldViewTitle>
          An on-chain, generative-art-mimics-life-mimics-art collectible and evolving
          game-within-a-game, by{' '}
          <a
            href="https://linktr.ee/MonkMatto"
            target="blank"
            rel="noreferrer"
            style={{
              textDecoration: 'underline',
              color: '#3a3a3a',
              fontWeight: '500',
            }}
          >
            Matto.
          </a>
        </St.WorldViewTitle>
        <St.WorldViewInfo>Click, drag, and scroll to navigate in 3D.</St.WorldViewInfo>
        <St.InstructionsContainer>
          {activeStep !== 0 ? (
            <St.StepContainer
              onClick={
                activeStep < 3
                  ? () => setActiveStep(activeStep + 1)
                  : () => setActiveStep(0)
              }
            >
              {activeStep === 1 ? (
                <St.Step key={Steps.step1}>{Steps.step1}</St.Step>
              ) : activeStep === 2 ? (
                <>
                  <St.Step key={Steps.step2}>{Steps.step2}</St.Step>
                  <St.Step>{Steps.step2Line2}</St.Step>
                  <St.Step>{Steps.step2Line3}</St.Step>
                  <St.Step>{Steps.step2Line4}</St.Step>
                </>
              ) : activeStep === 3 ? (
                <St.Step key={Steps.step3}>{Steps.step3}</St.Step>
              ) : null}
            </St.StepContainer>
          ) : null}
          <iframe
            height={windowWidth < 850 ? windowWidth : '850'}
            width={windowWidth < 850 ? windowWidth : '850'}
            src={generateRandomImage(generatorURLs)}
            title="generator"
            frameBorder="0"
          ></iframe>
        </St.InstructionsContainer>
        {activeStep === 0 ? (
          <St.ViewInstructions onClick={() => setActiveStep(1)}>
            Click here to view instructions.
          </St.ViewInstructions>
        ) : null}
        <St.NotesContainer>
          <St.NotesTitle>A Few Notes:</St.NotesTitle>
          <St.NotesText>
            When playing a Chainlife token or a Chainlife World level, press <em>H </em>
            for on-screen help.
          </St.NotesText>
          <St.NotesText>
            In Chainlife token simulations launched from the World view, all parameters
            are random, including the Custom Rule, which may be very harsh, resulting in a
            quick population death. If that happens, just refresh for a new simulation or
            learn how to change the ruleset.
          </St.NotesText>
          <St.NotesText>
            When playing a Chainlife World level, the ruleset defaults to the Game of
            Life, the token style is randomized every 6 minutes, and the <em>level</em> of
            the game matches the World level.
          </St.NotesText>
        </St.NotesContainer>
      </St.WorldViewContainer>
    </St.AppContainer>
  );
};

export default Home;
