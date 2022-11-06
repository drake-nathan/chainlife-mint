import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PREMINT_OWNERS } from 'services/apollo/queries';
import { ArtBlocks, PreMintOwners, UserZenTokens } from 'types/premintTypes';
import { parseArtBlocks } from 'utils/parseArtBlocks';
import { useWeb3React } from '@web3-react/core';

export const usePreMintOwners = () => {
  const { active } = useWeb3React();
  // NOTE: don't forget to change this you idiot
  const account = '0x2ee8670d2b936985d5fb1ee968810c155d3bb9ca';
  const { loading, error, data } = useQuery(GET_PREMINT_OWNERS);

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
      const usersTokens = preMintOwners[account];
      setUserZenTokens(usersTokens);
      console.log('users tokens:', usersTokens);
    }
  }, [active, account, preMintOwners]);

  return { loading, error, userZenTokens };
};
