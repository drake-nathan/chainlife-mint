/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type {
  ArtBlocks,
  PreMintOwners,
  UserZenTokens,
} from "types/premintTypes";

import { useQuery } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

import { GET_PREMINT_OWNERS } from "services/apollo/queries";
import { parseArtBlocks } from "utils/parseArtBlocks";

export const usePreMintOwners = () => {
  const { account, active } = useWeb3React();
  const { data, error } = useQuery(GET_PREMINT_OWNERS);

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
  }, [data, error]);

  useEffect(() => {
    if (active && account && preMintOwners) {
      const usersTokens = preMintOwners[account.toLowerCase()];

      setUserZenTokens(usersTokens);
    }
  }, [active, account, preMintOwners]);

  return { error, userZenTokens };
};
