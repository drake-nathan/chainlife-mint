import axios from 'axios';
import { CollectionResponse, IProject, IToken } from './types';

const rootApiUrl = 'https://api.gengames.io';

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

  try {
    const { data } = await axios.get<IProject>(url);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCollectionTokens = async (
  projectSlug: string,
  limit: number,
  skip: number,
  sort: 'asc' | 'desc',
) => {
  const url = `${rootApiUrl}/project/${projectSlug}/all-tokens`;

  const params = { limit, skip, sort };

  const { data: tokens } = await axios.get<CollectionResponse>(url, { params });

  return tokens;
};
