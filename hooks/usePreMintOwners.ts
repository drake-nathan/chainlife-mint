import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PREMINT_OWNERS } from 'services/apollo/queries';
import { ArtBlocks, PreMintOwner } from 'types/premintTypes';
import { parseArtBlocks } from 'utils/parseArtBlocks';

export const usePreMintOwners = () => {
  const { loading, error, data } = useQuery(GET_PREMINT_OWNERS);

  const [preMintOwners, setPreMintOwners] = useState<PreMintOwner>();

  useEffect(() => {
    if (data) {
      const preMintOwners = parseArtBlocks(data as ArtBlocks);
      setPreMintOwners(preMintOwners);
    }
  }, [data]);

  return { loading, error, preMintOwners };
};
