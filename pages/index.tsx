import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
import { generatorURLs } from 'helpers/iFrameMedia';
import { useWindowSize } from 'hooks/useWindowSize';
import * as St from '../styles/App.styled';

const Home: NextPage = () => {
  const { windowWidth } = useWindowSize();

  const generateRandomImage = (arr: string[]) => {
    return arr.length > 0
      ? arr[Math.floor(Math.random() * arr.length)]
      : arr[0];
  };

  return (
    <St.AppContainer>
      <Head>
        <title>Chainlife Mint</title>
        <meta name="description" content="Chainlife Mint." />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <NavBar />
      <St.BodyContainer>
        <St.SliderAndIframeContainer>
          <St.LeftSection>
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
              src={generateRandomImage(generatorURLs)}
              title="generator"
              frameBorder="0"
            ></iframe>
          </St.LeftSection>
        </St.SliderAndIframeContainer>
      </St.BodyContainer>
    </St.AppContainer>
  );
};

export default Home;
