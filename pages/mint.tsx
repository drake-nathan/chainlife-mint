/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

import Head from "next/head";
import { useEffect, useState } from "react";

import * as St from "../styles/mint.styles";
import DescriptionSections from "components/DescriptionSections/DescriptionSections";
import LoadingVideo from "components/LoadingVideo/LoadingVideo";
import NavBar from "components/NavBar/NavBar";
import Slider from "components/Slider/Slider";
import Web3Buttons from "components/Web3/Web3Buttons";
import { useMintDetails } from "hooks/useMintDetails";
import { useWindowSize } from "hooks/useWindowSize";
import {
  type Token,
  getGeneratorUrl,
  getSliderThumbnails,
} from "utils/getRandomToken";

const Home: NextPage = () => {
  const { currentSupply, maxSupply } = useMintDetails();
  const { windowWidth } = useWindowSize();

  const [sliderTokens, setSliderTokens] = useState<Token[]>([]);
  const [activeToken, setActiveToken] = useState<Token>();

  // TODO: this
  const [isTxPending] = useState(false);

  useEffect(() => {
    if (currentSupply) {
      setSliderTokens(getSliderThumbnails(currentSupply));
      const { genUrl, id, thumbUrl } = getGeneratorUrl(currentSupply);
      setActiveToken({ genUrl, id, thumbUrl });
    }
  }, [currentSupply]);

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta content="Chainlife." name="description" />
      </Head>
      <NavBar />

      <St.BodyContainer>
        <St.SliderAndIframeContainer>
          {windowWidth > 1000 && (
            <Slider>
              {sliderTokens.map((token) => (
                <div
                  className="tool"
                  data-tip={`Chainlife # ${token.id}`}
                  key={token.id}
                  onClick={() =>
                    setActiveToken({ genUrl: token.genUrl, id: token.id })
                  }
                >
                  <img alt="nft" src={token.thumbUrl} />
                </div>
              ))}
            </Slider>
          )}
          <St.LeftSection>
            <St.TitleAndCryptoContainer>
              <St.TitleContainer>
                <St.Title>
                  {currentSupply
                    ? `${currentSupply} of ${maxSupply} minted`
                    : `${maxSupply} max supply.`}
                </St.Title>
                {activeToken && (
                  <St.SubTitle>
                    Showing Chainlife # {activeToken.id}
                  </St.SubTitle>
                )}
              </St.TitleContainer>
              {windowWidth > 800 && <Web3Buttons />}
            </St.TitleAndCryptoContainer>
            {isTxPending ? (
              <LoadingVideo />
            ) : (
              activeToken && (
                <iframe
                  frameBorder="0"
                  height={
                    windowWidth > 750
                      ? "650"
                      : windowWidth >= 412
                        ? "412"
                        : windowWidth >= 390
                          ? "390"
                          : "360"
                  }
                  src={activeToken.genUrl}
                  title="generator"
                  width={windowWidth > 750 ? "650" : "390"}
                ></iframe>
              )
            )}

            <St.InfoContainer>
              {windowWidth < 800 && <Web3Buttons />}
              <St.InfoText>
                Chainlife NFTs are on-chain, generative-art, collectible and
                evolving games, that together create an everchanging, 3D world.
              </St.InfoText>
            </St.InfoContainer>
          </St.LeftSection>
        </St.SliderAndIframeContainer>
        <St.DescriptionsContainer>
          <DescriptionSections />
        </St.DescriptionsContainer>
      </St.BodyContainer>
    </St.AppContainer>
  );
};

export default Home;
