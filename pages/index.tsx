/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import DescriptionSections from 'components/DescriptionSections/DescriptionSections';
import Slider from 'components/Slider/Slider';
import Web3Buttons from 'components/Web3/Web3Buttons';
import { generatorURLs } from 'components/helpers/iFrameMedia';
import { sliderMedia } from 'components/Slider/sliderMedia';
import { useMintDetails } from 'hooks/useMintDetails';
import { useWindowSize } from 'hooks/useWindowSize';
import DynamicFallback from 'components/FallbackPage/DynamicFallback';
import * as St from '../styles/App.styled';
import { MintPageContext } from 'contexts/MintPageContext';

const Home: NextPage = () => {
  const nodeEnv = process.env.NODE_ENV;
  const { isMintLive } = useMintDetails();
  const { query } = useRouter();
  const { mintPage } = useContext(MintPageContext);

  const [showFallback, setShowFallback] = useState(true);

  const { windowWidth, windowHeight } = useWindowSize();

  const generateRandomImage = (arr: string[]) => {
    return arr.length > 0
      ? arr[Math.floor(Math.random() * arr.length)]
      : arr[0];
  };

  useEffect(() => {
    // NOTE: add /?showFallback=true to the url to show the fallback page in development
    if (query.showFallback === 'true') {
      setShowFallback(true);
    } else if (
      // NOTE: add /?showFallback=false to the url to hide the fallback page in production
      // NOTE: also hide fallback page if mint is live in prod or anytime in dev
      query.showFallback === 'false' ||
      (nodeEnv === 'production' && isMintLive) ||
      nodeEnv === 'development'
    ) {
      setShowFallback(false);
    }
  }, [query, isMintLive, nodeEnv]);

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife Mint</title>
        <meta name="description" content="Chainlife Mint." />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      {!showFallback ? (
        <>
          <NavBar />
          <St.BodyContainer>
            <St.SliderAndIframeContainer>
              {windowWidth > 1000 ? (
                <Slider>
                  {sliderMedia.map((nft) => (
                    <div key={nft.id}>
                      <img src={nft.video_url} alt="nft" />
                    </div>
                  ))}
                </Slider>
              ) : null}
              <St.LeftSection>
                <St.TitleAnCryptoContainer>
                  <St.TitleContainer>
                    <St.Title>NFT #</St.Title>
                    <St.SubTitle>NFT DESCRIPTION</St.SubTitle>
                  </St.TitleContainer>
                  <Web3Buttons />
                </St.TitleAnCryptoContainer>
                <iframe
                  height={windowWidth > 750 ? '650' : '300'}
                  width={windowWidth > 750 ? '650' : '300'}
                  src={generateRandomImage(generatorURLs)}
                  title="generator"
                  frameBorder="0"
                ></iframe>
                <St.InfoContainer>
                  <St.InfoText>
                    A brief description about this colletcion and stuff. More
                    stuff, more stuff, more stuff, more stuff, more stuff...
                  </St.InfoText>
                </St.InfoContainer>
              </St.LeftSection>
            </St.SliderAndIframeContainer>
            <St.DescriptionsContainer>
              <DescriptionSections />
            </St.DescriptionsContainer>
          </St.BodyContainer>
        </>
      ) : (
        <DynamicFallback />
      )}
    </St.AppContainer>
  );
};

export default Home;
