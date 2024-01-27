import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import React from "react";

import * as St from "../styles/App.styled";
import NavBar from "components/NavBar/NavBar";
import TokenIdForm from "components/TokenForm/TokenIdForm";

const Home: NextPage = () => {
  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta content="Chainlife" name="description" />
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
            Below is a randomly generated output from the chainlife algorithm.
            Click on it to activate it.
          </St.SubTitle>
        </St.TopSection>

        <St.FrameDiv>
          <iframe
            frameBorder="0"
            src="https://chainlife.art/"
            title="random generator"
          ></iframe>
        </St.FrameDiv>

        <St.NotesSection>
          <St.SubTitle>
            Chainlife is a rich and complex on-chain project. Learn more in the{" "}
            <a
              href="https://docs.chainlife.xyz/start-here/introduction"
              rel="noreferrer"
              target="blank"
            >
              docs,
            </a>{" "}
            explore the{" "}
            <Link href="/world" rel="noreferrer" target="blank">
              <span>world,</span>
            </Link>{" "}
            or enter a token id in the form below.
          </St.SubTitle>
        </St.NotesSection>

        <TokenIdForm />
      </St.BodyContainer>
    </St.AppContainer>
  );
};

export default Home;
