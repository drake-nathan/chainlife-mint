import { useEffect, useState } from "react";

import { useContract } from "./useContract";
import {
  fetchCurrentSupply,
  getMintPhase,
} from "services/web3/contractInteractions";

export const useMintDetails = () => {
  const { contract } = useContract();

  const currentTime = new Date();
  const mintStart = new Date("2022-11-08T14:00:00-0500");
  const preSalePeriod = 10; // days
  // Public start 11/18
  const publicStart = new Date(
    mintStart.getTime() + preSalePeriod * 24 * 60 * 60 * 1000,
  );
  const mintEnd = new Date("3000-01-01");

  const mintPrice = 0.08;
  const discountPrice = 0.08;
  const shiftFee = 0.001;
  const maxSupply = 4096;
  const maxMint = 1;

  const [isMintLive, setIsMintLive] = useState(false);
  const [isPreMint, setIsPreMint] = useState(false);
  const [currentSupply, setCurrentSupply] = useState<number>();

  useEffect(() => {
    getMintPhase(contract)
      .then((mintStage) => {
        if (mintStage) {
          if (mintStage === "2") {
            setIsMintLive(true);
            setIsPreMint(false);
          } else if (mintStage === "1") {
            setIsMintLive(true);
            setIsPreMint(true);
          } else if (mintStage === "0") {
            setIsMintLive(false);
            setIsPreMint(false);
          } else console.error("You fucked up.");
        } else {
          if (currentTime >= mintStart && currentTime <= mintEnd) {
            setIsMintLive(true);
          }

          if (currentTime >= mintStart && currentTime <= publicStart) {
            setIsPreMint(true);
          }
        }
      })
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  useEffect(() => {
    try {
      void fetchCurrentSupply(contract).then((supply) => {
        if (supply) {
          setCurrentSupply(supply);
        }
      });
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSupply]);

  return {
    currentSupply,
    discountPrice,
    isMintLive,
    isPreMint,
    maxMint,
    maxSupply,
    mintEnd,
    mintPrice,
    mintStart,
    publicStart,
    shiftFee,
  };
};
