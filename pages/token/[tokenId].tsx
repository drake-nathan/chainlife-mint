import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from 'components/NavBar/NavBar';
import TokenForms from 'components/TokenForm/TokenForms';
import { AppContainer } from '../../styles/App.styled';
import { getToken } from 'azureApi/fetches';
import { useEffect, useState } from 'react';
import { IToken } from 'azureApi/types';
import Traits from 'components/Traits/Traits';
import { getOwner } from 'web3/web3Fetches';
import { useWeb3React } from '@web3-react/core';
import { useContract } from 'hooks/useContract';
import LoadingVideo from 'components/LoadingVideo/LoadingVideo';
import { equalAddresses, shortenAddress } from 'web3/web3helpers';
import * as St from '../../styles/token.styled';

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
        <St.TokenHeader>
          <St.TokenTitle>Token #{tokenId}</St.TokenTitle>
          {owner && <St.SubtleTitle>Owner: {shortenAddress(owner)}</St.SubtleTitle>}
        </St.TokenHeader>

        <St.TokenContainer>
          {!isTxPending ? (
            <St.FrameContainer>
              <iframe src={generatorUrl} title="generator" frameBorder="0"></iframe>
            </St.FrameContainer>
          ) : (
            <LoadingVideo />
          )}

          <TokenForms tokenId={tokenIdNum} setIsTxPending={setIsTxPending} />
        </St.TokenContainer>

        {token && <Traits token={token} />}
      </St.PageContainer>
    </AppContainer>
  );
};

export default Token;
