import { useState, useEffect } from 'react';

export const useMintDetails = () => {
  const currentTime = new Date();
  const mintStart = new Date('2023-10-17T14:22:00-0400');
  const preSalePeriod = 2;
  const publicStart = new Date(mintStart.setDate(mintStart.getDate() + preSalePeriod));
  const mintEnd = new Date('3000-01-01');

  const mintPrice = 0.1;
  const shiftFee = 0.001;
  const discountPrice = 0.08;
  const maxSupply = 4096;
  const currentSupply = 14;
  const maxMint = 1;

  const [isMintLive, setIsMintLive] = useState(false);
  const [isPreMint, setIsPreMint] = useState(false);

  useEffect(() => {
    if (currentTime >= mintStart && currentTime <= mintEnd) {
      setIsMintLive(true);
    }

    if (currentTime >= mintStart && currentTime <= publicStart) {
      setIsPreMint(true);
    }
  }, [currentTime]);

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
