/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextPage } from "next";

import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosExpand } from "react-icons/io";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { RiImage2Line } from "react-icons/ri";
import { TfiNewWindow } from "react-icons/tfi";

import type { IToken } from "services/azureApi/types";

import X2Y2 from "../../public/Logo.png";
import Artacle from "../../public/artacle-logo.png";
import EsoterraIcon from "../../public/eso-01.svg";
import LooksRare from "../../public/looksrare-logo.png";
import OpenSea from "../../public/openSea-logo.png";
import { AppContainer } from "../../styles/App.styled";
import * as St from "../../styles/token.styled";
import NavBar from "components/NavBar/NavBar";
import TokenForms from "components/TokenForm/TokenForms";
import Traits from "components/Traits/Traits";
import { useContract } from "hooks/useContract";
import { fetchToken } from "services/azureApi/fetches";
import { getOwner } from "services/web3/contractInteractions";
import { equalAddresses, shortenAddress } from "services/web3/web3helpers";

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
      fetchToken("chainlife", tokenIdNum)
        .then((res) => {
          if (res) {
            setToken(res);
            setGeneratorUrl(res.generator_url);
          }
        })
        .catch(console.error);
    }
  }, [tokenId, tokenIdNum]);

  useEffect(() => {
    if (tokenId) {
      getOwner(contract, tokenIdNum)
        .then((res) => {
          setOwner(res);
          if (account && active) {
            setIsOwner(equalAddresses(account, res));
          }
        })
        .catch(console.error);
    }
  }, [tokenId, account, active, contract, tokenIdNum]);

  return (
    <AppContainer>
      <Head>
        <title>Chainlife</title>
        <meta content="Chainlife Token." name="description" />
      </Head>

      <NavBar />

      <St.PageContainer>
        <St.TokenContainer>
          <St.HeaderContainer>
            <St.TokenHeader>
              <St.Expand>
                <a
                  href={`https://api.substratum.art/project/chainlife/generator/${tokenId}`}
                  rel="noreferrer"
                  target="blank"
                >
                  <IoIosExpand
                    className="expand"
                    title="View Token In A Separate Window"
                  />
                </a>
                <a
                  className="eso"
                  href={`https://api.substratum.art/project/chainlife/generator/${tokenId}?esoterra=true
                  `}
                  rel="noreferrer"
                  target="blank"
                  title="View Esoterra In A Separate Window"
                >
                  <Image
                    alt="esoterra"
                    height={24}
                    src={EsoterraIcon}
                    width={24}
                  />
                </a>
                <a
                  href={`https://api.substratum.art/project/chainlife/generator/${tokenId}?painting=true
                  `}
                  rel="noreferrer"
                  target="blank"
                  title="View Painting In A Separate Window"
                >
                  <RiImage2Line className="expand" />
                </a>
                <a
                  href={`https://api.substratum.art/project/chainlife/generator/${tokenId}?mobile=true`}
                  rel="noreferrer"
                  target="blank"
                  title="View Mobile Generator"
                >
                  <MdOutlineMobileFriendly className="mobile" />
                </a>
              </St.Expand>
            </St.TokenHeader>
          </St.HeaderContainer>

          <St.FrameContainer>
            <iframe
              frameBorder="0"
              src={generatorUrl}
              title="generator"
            ></iframe>
          </St.FrameContainer>

          <St.FooterContainer>
            <St.TokenFooter>
              <St.TokenTitle>Chainlife #{tokenId}</St.TokenTitle>
              {owner && (
                <>
                  <St.SubtleTitle>
                    Owner: {shortenAddress(owner)}
                  </St.SubtleTitle>
                  <St.SubtleTitle>
                    {" "}
                    <a
                      href={`https://etherscan.io/address/${owner}`}
                      rel="noreferrer"
                      target="blank"
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
                rel="noreferrer"
                style={{
                  color: "#3a3a3a",
                }}
                target="blank"
                title="Artacle"
              >
                <Image alt="Artacle" height={28} src={Artacle} width={28} />
              </a>
              <a
                href={`https://x2y2.io/eth/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429/${tokenId}`}
                rel="noreferrer"
                style={{
                  color: "#3a3a3a",
                }}
                target="blank"
                title="X2Y@"
              >
                <Image alt="X2Y2" height={28} src={X2Y2} width={28} />
              </a>
              <a
                href={`https://looksrare.org/collections/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429/${tokenId}`}
                rel="noreferrer"
                style={{
                  color: "#3a3a3a",
                }}
                target="blank"
                title="LOOKSRARE"
              >
                <Image alt="LooksRare" height={28} src={LooksRare} width={28} />
              </a>
              <a
                href={`https://opensea.io/assets/0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429/${tokenId}`}
                rel="noreferrer"
                style={{
                  color: "#3a3a3a",
                }}
                target="blank"
                title="openSea"
              >
                <Image alt="openSea" height={28} src={OpenSea} width={28} />
              </a>
              <St.TokenTitle>Markets</St.TokenTitle>
            </St.MarketLinks>
          </St.FooterContainer>
        </St.TokenContainer>
        <St.ControlsAndTraits>
          <TokenForms isOwner={isOwner} tokenId={tokenIdNum} />

          {token && <Traits token={token} />}
        </St.ControlsAndTraits>
      </St.PageContainer>
    </AppContainer>
  );
};

export default Token;
