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
import { checkIfOwner } from 'web3/web3Fetches';
import { useWeb3React } from '@web3-react/core';
import { useContract } from 'hooks/useContract';
import * as St from '../../styles/token.styled';

const Token: NextPage = () => {
  const router = useRouter();
  const { account, active } = useWeb3React();
  const { goerliContract } = useContract();
  const { tokenId } = router.query;
  const tokenIdNum = Number(tokenId);

  const [token, setToken] = useState<IToken>();
  const [generatorUrl, setGeneratorUrl] = useState<string>();

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
    if (tokenId && active && account) {
      checkIfOwner(goerliContract, account, tokenIdNum).then((res) => {
        console.log('is owner', res);
      });
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
          <iframe
            height={650}
            width={650}
            src={generatorUrl}
            title="generator"
            frameBorder="0"
          ></iframe>
          <St.FormContainer>
            <TokenForms tokenId={tokenIdNum} />
          </St.FormContainer>
        </St.TokenContainer>
        {token && <Traits token={token} />}
      </St.PageContainer>
    </AppContainer>
  );
};

export default Token;
