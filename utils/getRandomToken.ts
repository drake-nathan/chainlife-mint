const getRandomToken = (currentSupply: number) => {
  const tokenId = Math.floor(Math.random() * currentSupply - 1);

  return tokenId;
};

export const getGeneratorUrl = (currentSupply: number, tokenId?: number) => {
  const token = getRandomToken(currentSupply) || tokenId;
  const root =
    'http://matto-api-azure-func.azurewebsites.net/project/chainlife/generator';

  const thumbRoot =
    'https://mattoapi.blob.core.windows.net/thumbnails/chainlife-testnet_';

  const generatorUrl = `${root}/${token}`;

  const thumbNailUrl = `${thumbRoot}${token}`;

  return { generatorUrl, thumbNailUrl, tokenId: token as number };
};

export const getSliderThumbnails = (currentSupply: number) => {
  const root = 'https://mattoapi.blob.core.windows.net/thumbnails/chainlife_';
  const genRoot = 'http://api.gengames.io/project/chainlife/generator';

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
