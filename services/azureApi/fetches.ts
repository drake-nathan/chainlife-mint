import axios from 'axios';
import { CollectionResponse, IProject, IToken, TxCounts } from './types';

const rootApiUrl = process.env.NEXT_PUBLIC_API_ROOT;

if (!rootApiUrl) {
  throw new Error('NEXT_PUBLIC_API_ROOT env var is not defined');
}

export const fetchToken = async (projectSlug: string, tokenId: number | string) => {
  const url = `${rootApiUrl}/project/${projectSlug}/token/${tokenId}`;

  try {
    const { data } = await axios.get<IToken>(url);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProject = async (projectSlug: string) => {
  const url = `${rootApiUrl}/project/${projectSlug}`;

  const { data } = await axios.get<IProject>(url);

  return data;
};

export const fetchCollectionTokens = async (
  projectSlug: string,
  limit: number,
  skip: number,
  sortDir: 'asc' | 'desc',
  sortType: 'tokenId' | 'worldLevel',
  tokenId: number | null,
) => {
  const url = `${rootApiUrl}/project/${projectSlug}/all-tokens`;

  const params = { limit, skip, sortDir, sortType, tokenId };

  const { data: tokens } = await axios.get<CollectionResponse>(url, { params });

  return tokens;
};

export const fetchTxCounts = async (projectSlug: string): Promise<TxCounts> => {
  const url = `${rootApiUrl}/project/${projectSlug}/txcount`;

  const { data } = await axios.get<TxCounts>(url);

  return data;
};
