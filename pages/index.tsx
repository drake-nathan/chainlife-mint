import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import * as Steps from 'helpers/worldviewInstructions';
import { useWindowSize } from 'hooks/useWindowSize';
import * as IoIcons from 'react-icons/io';
import * as St from '../styles/App.styled';

const Home: NextPage = () => {
  const { windowWidth } = useWindowSize();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife Mint</title>
        <meta name="description" content="Chainlife Mint." />
        <link rel="icon" href="/chainlife/favicon.ico" />
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
                <>
                  <St.Step key={Steps.step3}>{Steps.step3}</St.Step>
                  <St.Step>{Steps.step3Line2}</St.Step>
                  <St.Step>{Steps.step3Line3}</St.Step>
                  <St.Step>{Steps.step3Line4}</St.Step>
                  <St.Step>{Steps.step3Line5}</St.Step>
                  <St.Step>{Steps.step3Line6}</St.Step>
                </>
              ) : null}
            </St.StepContainer>
          ) : null}
          <St.FrameDiv>
            <iframe
              src="https://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/world"
              title="generator"
              frameBorder="0"
            ></iframe>
          </St.FrameDiv>
          <St.Expand
            href="https://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/world"
            target="blank"
            rel="noreferrer"
            title="Expand Worldview"
          >
            <IoIcons.IoIosExpand />
          </St.Expand>
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
