import { useState, useEffect } from 'react';
import { getProject } from 'services/azureApi/fetches';

export const useMintDetails = () => {
  const currentTime = new Date();
  const mintStart = new Date('2022-11-01T14:22:00-0400');
  const preSalePeriod = 9; // days
  const publicStart = new Date(mintStart.getTime() + preSalePeriod * 24 * 60 * 60 * 1000);
  const mintEnd = new Date('3000-01-01');

  const mintPrice = 0.1;
  const shiftFee = 0.001;
  const discountPrice = 0.08;
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
    // NOTE: Change this to fetch the current supply from the contract
    getProject('chainlife-testnet').then((project) => {
      if (project && project.current_supply) {
        setCurrentSupply(project.current_supply);
      }
    });
  }, [currentSupply]);

  return {
    isMintLive,
    isPreMint,
    mintStart,
    mintEnd,
    mintPrice,
    discountPrice,
    maxSupply,
    currentSupply,
    maxMint,
    shiftFee,
  };
};
