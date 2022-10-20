/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import DescriptionSections from 'components/DescriptionSections/DescriptionSections';
import Slider from 'components/Slider/Slider';
import Web3Buttons from 'components/Web3/Web3Buttons';
import { generatorURLs } from 'components/helpers/iFrameMedia';
import { sliderMedia } from 'components/Slider/sliderMedia';
import { useMintDetails } from 'hooks/useMintDetails';
import DynamicFallback from 'components/FallbackPage/DynamicFallback';
import * as st from '../styles/App.styled';

const Home: NextPage = () => {
  const nodeEnv = process.env.NODE_ENV;
  const { isMintLive } = useMintDetails();
  const { query } = useRouter();

  const [showFallback, setShowFallback] = useState(true);

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
    <st.AppContainer>
      <Head>
        <title>ChainLife Mint</title>
        <meta name="description" content="ChainLife Mint." />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      {!showFallback ? (
        <>
          <NavBar />
          <st.BodyContainer>
            <st.SliderAndIframeContainer>
              <Slider>
                {sliderMedia.map((nft) => (
                  <div key={nft.id}>
                    {/* <video loop autoPlay muted webkit-playsInline playsInline>
                  <source src={nft.video_url} type="video/mp4" />
            </video> */}
                    <img src={nft.video_url} alt="nft" />
                  </div>
                ))}
              </Slider>
              <st.LeftSection>
                <st.TitleAnCryptoContainer>
                  <st.TitleContainer>
                    <st.Title>NFT #</st.Title>
                    <st.SubTitle>NFT DESCRIPTION</st.SubTitle>
                  </st.TitleContainer>
                  <Web3Buttons />
                </st.TitleAnCryptoContainer>
                <iframe
                  height={650}
                  width={650}
                  src={generateRandomImage(generatorURLs)}
                  title="generator"
                  frameBorder="0"
                ></iframe>
                <st.InfoContainer>
                  <st.InfoText>
                    A brief description about this colletcion and stuff. More
                    stuff, more stuff, more stuff, more stuff, more stuff...
                  </st.InfoText>
                </st.InfoContainer>
              </st.LeftSection>
            </st.SliderAndIframeContainer>
            <st.DescriptionsContainer>
              <DescriptionSections />
            </st.DescriptionsContainer>
          </st.BodyContainer>
        </>
      ) : (
        <DynamicFallback />
      )}
    </st.AppContainer>
  );
};

export default Home;
