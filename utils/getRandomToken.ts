const getRandomToken = (currentSupply: number) => {
  const tokenId = Math.floor(Math.random() * currentSupply - 1);

  return tokenId;
};

export const getGeneratorUrl = (currentSupply: number, tokenId?: number) => {
  const token = getRandomToken(currentSupply) || tokenId;
  const root =
    'http://matto-api-azure-func.azurewebsites.net/project/chainlife/generator';

  const generatorUrl = `${root}/${token}`;
  return { generatorUrl, tokenId: token as number };
};

export const getSliderThumbnails = (currentSupply: number) => {
  const root = 'https://mattoapi.blob.core.windows.net/thumbnails/chainlife_';

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
    const url = `${root}${tokenIds[i]}.png`;
    return { url, id: tokenIds[i] };
  });

  return sliderTokens;
};
