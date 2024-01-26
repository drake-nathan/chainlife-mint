import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PREMINT_OWNERS } from "services/apollo/queries";
import { ArtBlocks, PreMintOwners, UserZenTokens } from "types/premintTypes";
import { parseArtBlocks } from "utils/parseArtBlocks";
import { useWeb3React } from "@web3-react/core";

export const usePreMintOwners = () => {
  const { active, account } = useWeb3React();
  // const account = '0x2ee8670d2b936985d5fb1ee968810c155d3bb9ca'; // random user with lots of tokens
  // const account = '0x56ee8bD11b5A385d3d533B4c2c6E37DE78b2aAFb'; // my wallet with 1 token
  // const myTestWallet = '0x93b84B50b65342e0C0115FFdb3d1c8c5134DC1Ad';
  const { error, data } = useQuery(GET_PREMINT_OWNERS);

  const [preMintOwners, setPreMintOwners] = useState<PreMintOwners>();
  const [userZenTokens, setUserZenTokens] = useState<UserZenTokens>();

  useEffect(() => {
    if (error) {
      console.error(error);
    }

    if (data) {
      const parsedData = parseArtBlocks(data as ArtBlocks);
      setPreMintOwners(parsedData);
    }
  }, [data]);

  useEffect(() => {
    if (active && account && preMintOwners) {
      const usersTokens = preMintOwners[account.toLowerCase()];

      if (usersTokens) {
        setUserZenTokens(usersTokens);
      }
    }
  }, [active, account, preMintOwners]);

  return { error, userZenTokens };
};
