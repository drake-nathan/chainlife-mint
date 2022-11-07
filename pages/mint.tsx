/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import DescriptionSections from 'components/DescriptionSections/DescriptionSections';
import Slider from 'components/Slider/Slider';
import Web3Buttons from 'components/Web3/Web3Buttons';
import { useMintDetails } from 'hooks/useMintDetails';
import { useWindowSize } from 'hooks/useWindowSize';
import DynamicFallback from 'components/FallbackPage/DynamicFallback';
import { MintPageContext } from 'contexts/MintPageContext';
import { getGeneratorUrl, getSliderThumbnails } from 'utils/getRandomToken';
import * as St from '../styles/mint.styles';

type Token = { url: string; id: number };

const Home: NextPage = () => {
  const nodeEnv = process.env.NODE_ENV || 'production';
  const { isMintLive, maxSupply, currentSupply } = useMintDetails();
  const { query } = useRouter();
  const { mintPage, setMintPage } = useContext(MintPageContext);
  const { windowWidth } = useWindowSize();

  const [sliderTokens, setSliderTokens] = useState<Token[]>([]);
  const [showFallback, setShowFallback] = useState(true);
  const [activeToken, setActiveToken] = useState<Token>();

  useEffect(() => {
    if (currentSupply) {
      setSliderTokens(getSliderThumbnails(currentSupply));
      const { generatorUrl, tokenId } = getGeneratorUrl(currentSupply);
      setActiveToken({ url: generatorUrl, id: tokenId });
    }
  }, [currentSupply]);

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
        <title>Chainlife</title>
        <meta name="description" content="Chainlife." />
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
                      {currentSupply
                        ? `${currentSupply} of ${maxSupply} minted`
                        : `${maxSupply} max supply.`}
                    </St.Title>
                    {activeToken && (
                      <St.SubTitle>Showing Chainlife # {activeToken.id}</St.SubTitle>
                    )}
                  </St.TitleContainer>
                  {windowWidth > 750 ? <Web3Buttons /> : null}
                </St.TitleAnCryptoContainer>
                {activeToken && (
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
                    src={activeToken.url}
                    title="generator"
                    frameBorder="0"
                  ></iframe>
                )}
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
