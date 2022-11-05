import { ArtBlocks, PreMintOwner } from 'types/premintTypes';

export const parseArtBlocks = (data: ArtBlocks): PreMintOwner => {
  const { enso, focus } = data;

  const preMintOwners: PreMintOwner = {};

  enso.tokens.forEach((token) => {
    const tokenId = parseInt(token.tokenId.slice(-3));
    const owner = token.owner.id;

    if (preMintOwners[owner]) {
      preMintOwners[owner].enso.push(tokenId);
    } else {
      preMintOwners[owner] = {
        enso: [tokenId],
        focus: [],
      };
    }
  });

  focus.tokens.forEach((token) => {
    const tokenId = parseInt(token.tokenId.slice(-3));
    const owner = token.owner.id;

    if (preMintOwners[owner]) {
      preMintOwners[owner].focus.push(tokenId);
    } else {
      preMintOwners[owner] = {
        enso: [],
        focus: [tokenId],
      };
    }
  });

  return preMintOwners;
};
