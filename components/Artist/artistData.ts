export const bio = `
  Matto - Shinkai (he/him) is a Buddhist artist, activist, collector, developer, educator, filmmaker, game designer, novelist, and poet. His art has always focused on human elements, either through movement, form, or action. He is an advocate for compassionate living, LGBT rights, equality for all, and environmental protection. Matto - Shinkai lives in North Carolina with his two partners and their dogs.
`;

interface Collection {
  name: string;
  image: string;
  maxSupply: number;
  currentSupply?: number;
  mintable: boolean;
  openSeaSlug: string;
  description?: string;
}

export const collections: Collection[] = [
  {
    name: 'Chainlife',
    image: 'https://mattoapi.blob.core.windows.net/thumbnails/chainlife-testnet_0.png',
    maxSupply: 4_096,
    mintable: true,
    openSeaSlug: 'chainlife-by-matto',
  },
  {
    name: 'Blonks',
    image: '/collections/blonks.png',
    maxSupply: 4_444,
    currentSupply: 4_444,
    mintable: false,
    openSeaSlug: 'blonks',
  },
  {
    name: 'Ensō',
    image: '/collections/enso.jpeg',
    maxSupply: 1_000,
    currentSupply: 1_000,
    mintable: false,
    openSeaSlug: 'enso-by-matto',
  },
  {
    name: 'FOCUS',
    image: '/collections/focus.png',
    maxSupply: 1_000,
    mintable: true,
    openSeaSlug: 'focus-by-matto',
  },
  {
    name: 'deFOCUSed',
    image: '/collections/defocused.png',
    maxSupply: 1_000,
    mintable: true,
    openSeaSlug: 'defocused',
  },
  {
    name: 'Texture and Hues',
    image: '/collections/texture.svg',
    maxSupply: 1_000,
    mintable: true,
    openSeaSlug: 'texture-and-hues',
  },
];
