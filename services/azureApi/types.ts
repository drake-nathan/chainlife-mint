export enum ProjectId {
  chainlifeTestnet,
  chainlifeMainnet,
  "100x10x1a",
}

export enum Chain {
  goerli = "goerli",
  mainnet = "mainnet",
}

export interface IRoyaltyInfo {
  additional_payee?: string;
  additional_payee_bps?: number;
  artist_address: string;
  royalty_fee_by_id: number;
}

export interface IProject {
  _id: ProjectId;
  artist: string;
  artist_address: string; // also RoyaltyInfo
  chain: Chain;
  collection_description: string;
  collection_image: string;
  collection_name: string;
  contract_address: string;
  creation_block: number;
  current_supply?: number;
  description: string;
  events: string[];
  external_url: string;
  license: string;
  maximum_supply: number;
  mintable: boolean;
  project_name: string;
  project_slug: string;
  royalty_info: IRoyaltyInfo;
  script_type: string;
  tx_count?: number;
  website: string;
}

export interface IAttribute {
  trait_type: string;
  value: number | string;
}

export interface IScriptInputs {
  current_owner: string;
  custom_rule: string;
  level_shift: number;
  previous_owner: string;
  token_entropy: string;
  token_id: number;
  transfer_count: number;
}

export interface IToken {
  _id?: string; // made by db
  animation_url: string; // generation script
  artist: string; // project
  artist_address: string; // project
  aspect_ratio: number;
  attributes: IAttribute[]; // script
  collection_name: string; // project
  description: string; // project
  external_url: string; // project
  generator_url: string; // same as animation_url
  image: string; // generation scripts
  image_data?: string; // not used for Chainlife
  license: string; // project*
  name: string; // projectname + tokenId 'Chainlife 9'
  project_id: number; // project
  project_name: string; // project
  project_slug: string; // project
  royalty_info: IRoyaltyInfo; // project
  script_inputs: IScriptInputs;
  script_type: string;
  thumbnail_url?: string;
  token_id: number; // get from blockchain
  website: string; // project
}

export interface ITransaction {
  _id?: string;
  block_number: number;
  event_type: string;
  project_id: number;
  token_id: number;
  transaction_date: Date;
  transaction_hash: string;
}

export interface IThumbnail {
  _id?: string;
  artblocks_id: string;
  image_full: string;
  image_thumbnail: string;
  project_id: 34 | 181;
  project_slug: "enso" | "focus";
  token_id: number;
}

export interface TokenAbbr {
  artist: string;
  external_url: string;
  generator_url: string;
  image: string;
  name: string;
  project_name: string;
  project_slug: string;
  script_inputs: IScriptInputs;
  thumbnail_url: string;
  token_id: number;
  world_level?: number;
}

export interface CollectionResponse {
  currentSupply: number;
  hasMore: boolean;
  skip: number;
  tokens: TokenAbbr[];
}

export interface TxCounts {
  customRules: number;
  levelShifts: number;
  mints: number;
  total: number;
  transfers: number;
}
