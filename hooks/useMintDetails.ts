import { useState, useEffect } from 'react';

export const useMintDetails = () => {
  const currentTime = new Date().getTime();
  const mintStart = Date.parse('2022-10-17T14:22:00-0400');
  const preSalePeriod = 48 * 60 * 60 * 1000;
  const publicStart = mintStart + preSalePeriod;
  const mintEnd = Date.parse('2023-10-18T14:22:00-0400');

  const mintPrice = 0.06;
  const discountPrice = 0.06;
  const maxSupply = 4096;
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
    maxMint,
  };
};
