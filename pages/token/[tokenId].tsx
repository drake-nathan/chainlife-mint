import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import TokenForms from 'components/TokenForm/TokenForms';
import { AppContainer } from '../../styles/App.styled';
import { getToken } from 'azureApi/fetches';
import { useEffect, useState } from 'react';
import OpenSea from '../../public/openSea-logo.png';
import LooksRare from '../../public/looksrare-logo.png';
import X2Y2 from '../../public/Logo.png';
import { IToken } from 'azureApi/types';
import Traits from 'components/Traits/Traits';
import { getOwner } from 'web3/web3Fetches';
import { useWeb3React } from '@web3-react/core';
import { useContract } from 'hooks/useContract';
import LoadingVideo from 'components/LoadingVideo/LoadingVideo';
import { equalAddresses, shortenAddress } from 'web3/web3helpers';
import { TfiNewWindow } from 'react-icons/tfi';
import { IoIosExpand } from 'react-icons/io';
import * as St from '../../styles/token.styled';
import { useWindowSize } from 'hooks/useWindowSize';

const Token: NextPage = () => {
  const router = useRouter();
  const { account, active } = useWeb3React();
  const { goerliContract } = useContract();
  const { tokenId } = router.query;
  const tokenIdNum = Number(tokenId);

  const [token, setToken] = useState<IToken>();
  const [owner, setOwner] = useState<string>();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [generatorUrl, setGeneratorUrl] = useState<string>();
  const [isTxPending, setIsTxPending] = useState<boolean>(false);

  useEffect(() => {
    // NOTE: change slug for mainnet
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
  }, [tokenId]);

  useEffect(() => {
    if (tokenId) {
      getOwner(goerliContract, tokenIdNum).then((res) => {
        setOwner(res);
        if (account && active) {
          setIsOwner(equalAddresses(account, res));
        }
      });
    }
  }, [tokenId, account, active]);

  useEffect(() => {
    if (isTxPending) {
      setTimeout(() => {
        setIsTxPending(false);
        window.location.reload();
      }, 30000);
    }
  }, [isTxPending]);

  return (
    <AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta name="description" content="Chainlife Token." />
      </Head>

      <NavBar />

      <St.PageContainer>
        <St.TokenContainer>
          <St.HeaderContainer>
            <St.TokenHeader>
              <St.Expand>
                <a
                  href={`https://api.gengames.io/project/chainlife-testnet/esoterra/${tokenId}
                  `}
                  target="blank"
                  rel="noreferrer"
                  title="openSea"
                  style={{
                    color: '#3a3a3a',
                  }}
                >
                  <p>esoterra</p>
                </a>
                <IoIosExpand title="View Token In A Separate Window" />
              </St.Expand>
            </St.TokenHeader>
          </St.HeaderContainer>
          {!isTxPending ? (
            <St.FrameContainer>
              <iframe src={generatorUrl} title="generator" frameBorder="0"></iframe>
            </St.FrameContainer>
          ) : (
            <LoadingVideo />
          )}
          <St.FooterContainer>
            <St.TokenFooter>
              <St.TokenTitle>Chainlife #{tokenId}</St.TokenTitle>
              {owner && (
                <>
                  <St.SubtleTitle>Owner: {shortenAddress(owner)}</St.SubtleTitle>
                  <St.SubtleTitle>
                    {' '}
                    <a
                      href={`https://goerli.etherscan.io/address/${owner}`}
                      target="blank"
                      rel="noreferrer"
                      title="View Owner On Etherscan"
                    >
                      <TfiNewWindow />
                    </a>
                  </St.SubtleTitle>
                </>
              )}
            </St.TokenFooter>
            <St.MarketLinks>
              <a
                href={`https://goerli.x2y2.io/eth/0x04c9E99D134565eB0F0Fef07FB70741A5b615075/${tokenId}`}
                target="blank"
                rel="noreferrer"
                title="X2Y@"
                style={{
                  color: '#3a3a3a',
                }}
              >
                <Image src={X2Y2} width={28} height={28} alt="openSea" />
              </a>
              <a
                href={`https://goerli.looksrare.org/collections/0x04c9E99D134565eB0F0Fef07FB70741A5b615075/${tokenId}`}
                target="blank"
                rel="noreferrer"
                title="LOOKSRARE"
                style={{
                  color: '#3a3a3a',
                }}
              >
                <Image src={LooksRare} width={28} height={28} alt="openSea" />
              </a>
              <a
                href={`https://testnets.opensea.io/assets/goerli/0x04c9e99d134565eb0f0fef07fb70741a5b615075/${tokenId}`}
                target="blank"
                rel="noreferrer"
                title="openSea"
                style={{
                  color: '#3a3a3a',
                }}
              >
                <Image src={OpenSea} width={28} height={28} alt="openSea" />
              </a>
              <St.TokenTitle>Markets</St.TokenTitle>
            </St.MarketLinks>
          </St.FooterContainer>
        </St.TokenContainer>
        <St.ControlsAndTraits>
          <TokenForms tokenId={tokenIdNum} setIsTxPending={setIsTxPending} />

          {token && <Traits token={token} />}
        </St.ControlsAndTraits>
      </St.PageContainer>
    </AppContainer>
  );
};

export default Token;
