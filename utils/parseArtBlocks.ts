import { ArtBlocks, PreMintOwners } from 'types/premintTypes';

export const parseArtBlocks = (data: ArtBlocks): PreMintOwners => {
  const { enso, focus } = data;

  const preMintOwners: PreMintOwners = {};

  enso.tokens.forEach((token) => {
    const tokenId = parseInt(token.tokenId.slice(-3));
    const owner = token.owner.id.toLowerCase();

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
