const getRandomToken = (currentSupply: number) => {
  const tokenId = Math.floor(Math.random() * currentSupply - 1);

  return tokenId;
};

export const getGeneratorUrl = (currentSupply: number, tokenId?: number) => {
  const token = getRandomToken(currentSupply) || tokenId;
  // NOTE: Make this mainnet when ready
  const root =
    'http://matto-api-azure-func.azurewebsites.net/project/chainlife-testnet/generator';

  const generatorUrl = `${root}/${token}`;
  return { generatorUrl, tokenId: token as number };
};

export const getSliderTokens = (currentSupply: number) => {
  const root = 'https://mattoapi.blob.core.windows.net/images/chainlife-testnet_';
  // NOTE: Make this mainnet when ready

  const maxlength = 9;
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
