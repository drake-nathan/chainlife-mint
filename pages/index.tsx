import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import Instructions from 'components/Instructions/Instructions';
import TokenIdForm from 'components/TokenForm/TokenIdForm';
import { IoIosExpand } from 'react-icons/io';
import * as St from '../styles/App.styled';

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
        <meta name="description" content="Chainlife Mint" />
      </Head>

      <NavBar />
      <St.WorldViewContainer>
        <St.WorldViewInfo>Welcome to Chainlife!</St.WorldViewInfo>
        <St.WorldViewTitle>
          {
            "This is a fully random Chainlife token. Click on it to activate it, then if you'd like a list of hotkeys, press"
          }{' '}
          <strong>{"'H'."}</strong>
        </St.WorldViewTitle>

        <St.InstructionsContainer>
          <Instructions activeStep={activeStep} setActiveStep={setActiveStep} />

          <St.FrameDiv>
            <iframe
              src="https://chainlife.art/"
              title="random generator"
              frameBorder="0"
            ></iframe>
          </St.FrameDiv>
        </St.InstructionsContainer>
        <St.NotesContainer>
          <St.WorldViewTitle>
            There is much more to Chainlife than any single token. Together, the entire
            collection forms a 3D world. Learn more in the{' '}
            <a
              href="https://chainlife.gitbook.io/docs/start-here/introduction"
              target="blank"
              rel="noreferrer"
              style={{
                textDecoration: 'underline',
                color: '#3a3a3a',
                fontWeight: '500',
              }}
            >
              docs,
            </a>{' '}
            or explore the{' '}
            <a
              href="https://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/world"
              target="blank"
              rel="noreferrer"
              style={{
                textDecoration: 'underline',
                color: '#3a3a3a',
                fontWeight: '500',
              }}
            >
              world.
            </a>
          </St.WorldViewTitle>
        </St.NotesContainer>
        <TokenIdForm />
      </St.WorldViewContainer>
    </St.AppContainer>
  );
};

export default Home;
