import type { ArtBlocks, PreMintOwners } from "types/premintTypes";

export const parseArtBlocks = (data: ArtBlocks): PreMintOwners => {
  const { enso, focus } = data;

  const preMintOwners: PreMintOwners = {};

  enso.tokens.forEach((token) => {
    const tokenId = parseInt(token.tokenId.slice(-3));
    const owner = token.owner.id.toLowerCase();

    preMintOwners[owner].enso.push(tokenId);
  });

  focus.tokens.forEach((token) => {
    const tokenId = parseInt(token.tokenId.slice(-3));
    const owner = token.owner.id;

    preMintOwners[owner].focus.push(tokenId);
  });

  return preMintOwners;
};
