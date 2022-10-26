/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import TokenForms from 'components/DescriptionSections/TokenForms';
import { AppContainer } from '../../styles/App.styled';
import * as St from './token.styled';
import { getToken } from 'azureApi/fetches';
import { useEffect, useState } from 'react';
import { IToken } from 'azureApi/types';
import LoadingVideo from 'components/LoadingVideo/LoadingVideo';
import Traits from 'components/Traits/Traits';

const Home: NextPage = () => {
  const router = useRouter();
  const { tokenId } = router.query;
  const tokenIdNum = Number(tokenId);
  const [token, setToken] = useState<IToken>();
  const [generatorUrl, setGeneratorUrl] = useState<string>();

  useEffect(() => {
    if (tokenId) {
      getToken('chainlife-testnet', tokenIdNum)
        .then((res) => {
          if (res) {
            setToken(res);
            setGeneratorUrl(res?.generator_url);
          }
        })
        .catch(console.error);
    }
    // NOTE: change slug for mainnet
  }, [tokenId]);

  return (
    <AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife Token." />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <NavBar />

      <St.TokenContainer>
        {generatorUrl ? (
          <iframe
            height={650}
            width={650}
            src={generatorUrl}
            title="generator"
            frameBorder="0"
          ></iframe>
        ) : (
          <LoadingVideo />
        )}
        {token && <Traits token={token} />}
      </St.TokenContainer>
      <St.FormContainer>
        <TokenForms tokenId={tokenIdNum} />
      </St.FormContainer>
    </AppContainer>
  );
};

export default Home;
