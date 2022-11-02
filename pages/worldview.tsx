import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import Instructions from 'components/Instructions/Instructions';
import TokenIdForm from 'components/TokenForm/TokenIdForm';
import { IoIosExpand } from 'react-icons/io';
import * as St from '../styles/Worldview.styled';

const Home: NextPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleInstructionsClick = () => {
    if (activeStep === 0) setActiveStep(1);
    else setActiveStep(0);
  };

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife." />
      </Head>

      <NavBar />
      <St.WorldViewContainer>
        <St.WorldViewTitle>
          An on-chain, generative-art-mimics-life collectible and evolving
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
          <Instructions activeStep={activeStep} setActiveStep={setActiveStep} />

          <St.FrameDiv>
            <iframe
              src="https://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/world"
              title="random generator"
              frameBorder="0"
            ></iframe>
          </St.FrameDiv>

          <St.Expand
            href="https://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/world"
            target="blank"
            rel="noreferrer"
            title="Expand Worldview"
          >
            <IoIosExpand />
          </St.Expand>
        </St.InstructionsContainer>

        <St.ViewInstructions onClick={handleInstructionsClick}>
          Click here to view instructions.
        </St.ViewInstructions>

        <TokenIdForm />
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
