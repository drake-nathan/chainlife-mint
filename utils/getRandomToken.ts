export interface Token {
  id: number;
  genUrl: string;
  thumbUrl?: string;
}

const getRandomToken = (currentSupply: number): number => {
  const tokenId = Math.floor(Math.random() * currentSupply);

  return tokenId;
};

export const getGeneratorUrl = (currentSupply: number, tokenId?: number): Token => {
  const id = getRandomToken(currentSupply) || tokenId || 0;

  const root = 'https://api.gengames.io/project/chainlife/generator';
  const thumbRoot = 'https://mattoapi.blob.core.windows.net/thumbnails/chainlife_';

  const genUrl = `${root}/${id}`;

  const thumbUrl = `${thumbRoot}${id}`;

  return { genUrl, thumbUrl, id };
};

export const getSliderThumbnails = (currentSupply: number): Token[] => {
  const root = 'https://mattoapi.blob.core.windows.net/thumbnails/chainlife_';
  const genRoot = 'https://api.gengames.io/project/chainlife/generator';

  const maxlength = 50;
  const length = currentSupply > maxlength ? maxlength : currentSupply;

  const tokenIds: number[] = [];
  while (tokenIds.length < length) {
    const tokenId = getRandomToken(currentSupply);
    if (!tokenIds.includes(tokenId)) {
      tokenIds.push(tokenId);
    }
  }

  const sliderTokens = Array.from({ length }, (_, i) => {
    const thumbUrl = `${root}${tokenIds[i]}.png`;
    const genUrl = `${genRoot}/${tokenIds[i]}`;
    return { thumbUrl, genUrl, id: tokenIds[i] };
  });

  return sliderTokens;
};
