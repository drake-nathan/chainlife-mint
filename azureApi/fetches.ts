import axios from 'axios';
import { IToken } from './types';

const rootUrl = 'https://matto-api-azure-func.azurewebsites.net';

export const getToken = async (projectSlug: string, tokenId: number | string) => {
  const url = `${rootUrl}/project/${projectSlug}/token/${tokenId}`;

  try {
    const { data } = await axios.get(url);

    return data as IToken;
  } catch (error) {
    console.error(error);
  }
};
