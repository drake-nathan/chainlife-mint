import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import TokenForms from 'components/TokenForm/TokenForms';
import { AppContainer } from '../../styles/App.styled';
import { getToken } from 'services/azureApi/fetches';
import { useEffect, useState } from 'react';
import OpenSea from '../../public/openSea-logo.png';
import LooksRare from '../../public/looksrare-logo.png';
import X2Y2 from '../../public/Logo.png';
import Artacle from '../../public/artacle-logo.png';
import { IToken } from 'services/azureApi/types';
import Traits from 'components/Traits/Traits';
import { getOwner } from 'services/web3/contractInteractions';
import { useWeb3React } from '@web3-react/core';
import { useContract } from 'hooks/useContract';
import { useMintDetails } from 'hooks/useMintDetails';
import LoadingVideo from 'components/LoadingVideo/LoadingVideo';
import { equalAddresses, shortenAddress } from 'services/web3/web3helpers';
import EsoterraIcon from '../../public/eso-01.svg';
import { TfiNewWindow } from 'react-icons/tfi';
import { IoIosExpand } from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as St from '../../styles/token.styled';

const Token: NextPage = () => {
  const router = useRouter();
  const { account, active } = useWeb3React();
  const { contract } = useContract();
  const { tokenId } = router.query;
  const tokenIdNum = Number(tokenId);

  const [token, setToken] = useState<IToken>();
  const [owner, setOwner] = useState<string>();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [generatorUrl, setGeneratorUrl] = useState<string>();

  useEffect(() => {
    if (tokenId) {
      getToken('chainlife', tokenIdNum)
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
      try {
        getOwner(contract.goerli, tokenIdNum).then((res) => {
          setOwner(res);
          if (account && active) {
            setIsOwner(equalAddresses(account, res));
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, [tokenId, account, active]);

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
                  title="View Esoterra In A Separate Window"
                  className="eso"
                >
                  <Image src={EsoterraIcon} width={24} height={24} alt="esoterra" />
                </a>
                <a
                  href={`https://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/generator/${tokenId}`}
                  target="blank"
                  rel="noreferrer"
                >
                  <IoIosExpand
                    title="View Token In A Separate Window"
                    className="expand"
                  />
                </a>
                <a
                  href={`https://api.gengames.io/project/chainlife-testnet/generator-mobile/${tokenId}`}
                  target="blank"
                  rel="noreferrer"
                  title="View Mobile Generator"
                >
                  <MdIcons.MdOutlineMobileFriendly className="mobile" />
                </a>
              </St.Expand>
            </St.TokenHeader>
          </St.HeaderContainer>

          <St.FrameContainer>
            <iframe src={generatorUrl} title="generator" frameBorder="0"></iframe>
          </St.FrameContainer>

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
                href={`https://artacle.io/project/chainlife/${tokenId}`}
                target="blank"
                rel="noreferrer"
                title="Artacle"
                style={{
                  color: '#3a3a3a',
                }}
              >
                <Image src={Artacle} width={28} height={28} alt="Artacle" />
              </a>
              <a
                href={`https://goerli.x2y2.io/eth/0x04c9E99D134565eB0F0Fef07FB70741A5b615075/${tokenId}`}
                target="blank"
                rel="noreferrer"
                title="X2Y@"
                style={{
                  color: '#3a3a3a',
                }}
              >
                <Image src={X2Y2} width={28} height={28} alt="X2Y2" />
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
                <Image src={LooksRare} width={28} height={28} alt="LooksRare" />
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
          <TokenForms tokenId={tokenIdNum} isOwner={isOwner} />

          {token && <Traits token={token} />}
        </St.ControlsAndTraits>
      </St.PageContainer>
    </AppContainer>
  );
};

export default Token;
