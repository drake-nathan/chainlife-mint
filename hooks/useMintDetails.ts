import { useState, useEffect } from 'react';
import { getProject } from 'services/azureApi/fetches';
import { fetchCurrentSupply } from 'services/web3/contractInteractions';
import { useContract } from './useContract';

export const useMintDetails = () => {
  const { contract } = useContract();

  const currentTime = new Date();
  const mintStart = new Date('2022-11-08T14:00:00-0500');
  const preSalePeriod = 10; // days
  // Public start 11/18
  const publicStart = new Date(mintStart.getTime() + preSalePeriod * 24 * 60 * 60 * 1000);
  const mintEnd = new Date('3000-01-01');

  const mintPrice = 0.08;
  const discountPrice = 0.08;
  const shiftFee = 0.001;
  const maxSupply = 4096;
  const maxMint = 1;

  const [isMintLive, setIsMintLive] = useState(false);
  const [isPreMint, setIsPreMint] = useState(false);
  const [currentSupply, setCurrentSupply] = useState<number>();

  useEffect(() => {
    if (currentTime >= mintStart && currentTime <= mintEnd) {
      setIsMintLive(true);
    }

    if (currentTime >= mintStart && currentTime <= publicStart) {
      setIsPreMint(true);
    }
  }, [currentTime]);

  useEffect(() => {
    try {
      fetchCurrentSupply(contract.mainnet).then((supply) => {
        if (supply) {
          setCurrentSupply(supply);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [currentSupply]);

  return {
    isMintLive,
    isPreMint,
    mintStart,
    mintEnd,
    mintPrice,
    publicStart,
    discountPrice,
    maxSupply,
    currentSupply,
    maxMint,
    shiftFee,
  };
};
