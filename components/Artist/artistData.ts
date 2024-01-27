export const bio = `
  Matto - Shinkai (he/him) is a Buddhist artist, activist, collector, developer, educator, filmmaker, game designer, novelist, and poet. His art has always focused on human elements, either through movement, form, or action. He is an advocate for compassionate living, LGBT rights, equality for all, and environmental protection. Matto - Shinkai lives in North Carolina with his two partners and their dogs.
`;

interface Collection {
  currentSupply?: number;
  description?: string;
  image: string;
  maxSupply: number;
  mintable: boolean;
  name: string;
  openSeaSlug: string;
}

export const collections: Collection[] = [
  {
    image:
      "https://mattoapi.blob.core.windows.net/thumbnails/chainlife-testnet_0.png",
    maxSupply: 4_096,
    mintable: true,
    name: "Chainlife",
    openSeaSlug: "chainlife-by-matto",
  },
  {
    currentSupply: 4_444,
    image: "/collections/blonks.png",
    maxSupply: 4_444,
    mintable: false,
    name: "Blonks",
    openSeaSlug: "blonks",
  },
  {
    currentSupply: 1_000,
    image: "/collections/enso.jpeg",
    maxSupply: 1_000,
    mintable: false,
    name: "Ensō",
    openSeaSlug: "enso-by-matto",
  },
  {
    image: "/collections/focus.png",
    maxSupply: 1_000,
    mintable: true,
    name: "FOCUS",
    openSeaSlug: "focus-by-matto",
  },
  {
    image: "/collections/defocused.png",
    maxSupply: 1_000,
    mintable: true,
    name: "deFOCUSed",
    openSeaSlug: "defocused",
  },
  {
    image: "/collections/texture.svg",
    maxSupply: 1_000,
    mintable: true,
    name: "Texture and Hues",
    openSeaSlug: "texture-and-hues",
  },
];
