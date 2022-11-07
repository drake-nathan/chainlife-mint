import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PREMINT_OWNERS } from 'services/apollo/queries';
import { ArtBlocks, PreMintOwners, UserZenTokens } from 'types/premintTypes';
import { parseArtBlocks } from 'utils/parseArtBlocks';
import { useWeb3React } from '@web3-react/core';
import { ensoURLs } from 'utils/thumbnails';
import { useContract } from './useContract';
import { checkIfEnsoUsed, checkIfFocusUsed } from 'services/web3/contractInteractions';

export const usePreMintOwners = () => {
  const { active, account } = useWeb3React();
  // NOTE: don't forget to change this to the correct contract address
  // const account = '0x2ee8670d2b936985d5fb1ee968810c155d3bb9ca';
  // const account = '0x56ee8bD11b5A385d3d533B4c2c6E37DE78b2aAFb';
  const myTestWallet = '0x93b84B50b65342e0C0115FFdb3d1c8c5134DC1Ad';
  const { loading, error, data } = useQuery(GET_PREMINT_OWNERS);
  const { goerliContract } = useContract();

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
    try {
      if (active && account && preMintOwners) {
        // hardcode tesetnet tokens if my test wallet is connected
        if (account.toLowerCase() === myTestWallet.toLowerCase()) {
          const tokens = ensoURLs.map((token) => token.tokenId);

          Promise.all(
            tokens.map(async (token) => {
              const focusUsed = await checkIfFocusUsed(goerliContract, token);
              return !focusUsed;
            }),
          ).then((usedValues) => {
            const testTokens = tokens.filter((_, i) => usedValues[i]);
            setUserZenTokens({ enso: [], focus: testTokens });
          });
        } else {
          // handles real users
          const usersTokens = preMintOwners[account.toLowerCase()];

          if (usersTokens) {
            const { enso, focus } = usersTokens;
            // if user has tokens, check if they have been used. this is my async filter hack

            Promise.all(
              enso.map(async (token) => {
                const ensoUsed = await checkIfEnsoUsed(goerliContract, token);
                return !ensoUsed;
              }),
            )
              .then((usedValues) => {
                const ensoFiltered = enso.filter((_, i) => usedValues[i]);
                return ensoFiltered;
              })
              .then((ensoFiltered) => {
                Promise.all(
                  focus.map(async (token) => {
                    const focusUsed = await checkIfFocusUsed(goerliContract, token);
                    return !focusUsed;
                  }),
                ).then((usedValues) => {
                  const focusFiltered = focus.filter((_, i) => usedValues[i]);
                  setUserZenTokens({
                    enso: ensoFiltered,
                    focus: focusFiltered,
                  });
                });
              });
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [active, account, preMintOwners]);

  return { loading, error, userZenTokens };
};
