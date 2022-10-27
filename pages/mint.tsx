/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import DescriptionSections from 'components/DescriptionSections/DescriptionSections';
import Slider from 'components/Slider/Slider';
import Web3Buttons from 'components/Web3/Web3Buttons';
import { useContract } from 'hooks/useContract';
import { useMintDetails } from 'hooks/useMintDetails';
import { useWindowSize } from 'hooks/useWindowSize';
import DynamicFallback from 'components/FallbackPage/DynamicFallback';
import { MintPageContext } from 'contexts/MintPageContext';
import * as St from '../styles/App.styled';
import { getGeneratorUrl, getSliderTokens } from 'helpers/getRandomToken';

const Home: NextPage = () => {
  const nodeEnv = process.env.NODE_ENV;
  const { isMintLive, maxSupply, currentSupply } = useMintDetails();
  const { query } = useRouter();
  const { mintPage } = useContext(MintPageContext);
  const { windowWidth } = useWindowSize();
  const currentContract = useContract();

  const [sliderTokens, setSliderTokens] = useState<{ url: string; id: number }[]>([]);
  const [showFallback, setShowFallback] = useState(true);
  // const [isOpen, setOpen] = useState(false);

  const { generatorUrl, tokenId } = getGeneratorUrl(currentSupply);

  // useEffect(() => {
  //   if (windowWidth > 1000) {
  //     setOpen(false);
  //   }
  // }, [windowWidth]);

  useEffect(() => {
    setSliderTokens(getSliderTokens(currentSupply));
  }, []);

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
        <link rel="icon" href="/chainlife/favicon.ico" />
      </Head>

      {!showFallback ? (
        <>
          <NavBar />
          <St.BodyContainer>
            <St.SliderAndIframeContainer>
              {windowWidth > 1000 ? (
                <Slider>
                  {sliderTokens.map((token) => (
                    <div key={token.id}>
                      <img src={token.url} alt="nft" />
                    </div>
                  ))}
                </Slider>
              ) : null}
              <St.LeftSection>
                <St.TitleAnCryptoContainer>
                  <St.TitleContainer>
                    <St.Title>
                      {currentSupply < maxSupply
                        ? `${currentSupply} of ${maxSupply} minted`
                        : `${maxSupply} tokens remaining.`}
                    </St.Title>
                    <St.SubTitle>Showing Chainlife # {tokenId}</St.SubTitle>
                  </St.TitleContainer>
                  {windowWidth > 750 ? <Web3Buttons /> : null}
                </St.TitleAnCryptoContainer>
                <iframe
                  height={
                    windowWidth > 750
                      ? '650'
                      : windowWidth >= 412
                      ? '412'
                      : windowWidth >= 390
                      ? '390'
                      : '360'
                  }
                  width={windowWidth > 750 ? '650' : '390'}
                  src={generatorUrl}
                  title="generator"
                  frameBorder="0"
                ></iframe>
                <St.InfoContainer>
                  {windowWidth < 750 ? <Web3Buttons /> : null}
                  <St.InfoText>
                    Chainlife NFTs are on-chain, generative-art, collectible and evolving
                    games, that together create an everchanging, 3D world.
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
