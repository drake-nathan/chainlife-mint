/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import TokenForms from 'components/DescriptionSections/TokenForms';
import { AppContainer } from '../../styles/App.styled';
import * as St from './token.styled';

const Home: NextPage = () => {
  const router = useRouter();
  const { tokenId } = router.query;
  const tokenIdNum = Number(tokenId);

  const generatorRoot =
    'https://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/generator';

  return (
    <AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife Token." />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <NavBar />

      <St.TokenContainer>
        <iframe
          height={650}
          width={650}
          src={`${generatorRoot}/${tokenId}`}
          title="generator"
          frameBorder="0"
        ></iframe>

        <St.FormContainer>
          <TokenForms tokenId={tokenIdNum} />
        </St.FormContainer>
      </St.TokenContainer>
    </AppContainer>
  );
};

export default Home;
