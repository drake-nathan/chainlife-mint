/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import TokenForms from 'components/DescriptionSections/TokenForms';
import * as St from '../../styles/App.styled';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const { tokenId } = router.query;
  const tokenIdNum = Number(tokenId);

  const generatorRoot =
    'https://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/generator';

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife Mint</title>
        <meta name="description" content="Chainlife Token." />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <NavBar />
      <St.BodyContainer>
        <St.SliderAndIframeContainer>
          <St.LeftSection>
            <St.TitleAnCryptoContainer>
              <St.TitleContainer>
                <St.Title>NFT #</St.Title>
                <St.SubTitle>NFT DESCRIPTION</St.SubTitle>
              </St.TitleContainer>
            </St.TitleAnCryptoContainer>
            <iframe
              height={650}
              width={650}
              src={`${generatorRoot}/${tokenId}`}
              title="generator"
              frameBorder="0"
            ></iframe>
          </St.LeftSection>
        </St.SliderAndIframeContainer>
        <St.DescriptionsContainer>
          <TokenForms tokenId={tokenIdNum} />
        </St.DescriptionsContainer>
      </St.BodyContainer>
    </St.AppContainer>
  );
};

export default Home;
