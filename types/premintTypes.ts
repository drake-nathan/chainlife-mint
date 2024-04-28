interface Token {
  owner: {
    id: string;
  };
  tokenId: string;
}

interface Project {
  name: string;
  tokens: Token[];
}

export interface ArtBlocks {
  enso: Project;
  focus: Project;
}

export interface UserZenTokens {
  enso: number[];
  focus: number[];
}

export type PreMintOwners = Record<string, UserZenTokens>;
