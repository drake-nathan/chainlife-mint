import axios from 'axios';
import { IProject, IToken } from './types';

const rootUrl = 'https://api.gengames.io';

export const getToken = async (projectSlug: string, tokenId: number | string) => {
  const url = `${rootUrl}/project/${projectSlug}/token/${tokenId}`;

  try {
    const { data } = await axios.get(url);

    return data as IToken;
  } catch (error) {
    console.error(error);
  }
};

export const getProject = async (projectSlug: string) => {
  const url = `${rootUrl}/project/${projectSlug}`;

  try {
    const { data } = await axios.get(url);

    return data as IProject;
  } catch (error) {
    console.error(error);
  }
};
