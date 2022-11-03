interface Token {
  tokenId: string;
  owner: {
    id: string;
  };
}

interface Project {
  name: string;
  tokens: Token[];
}

export interface ArtBlocks {
  enso: Project;
  focus: Project;
}

export interface PreMintOwner {
  [account: string]: {
    enso: number[];
    focus: number[];
  };
}
