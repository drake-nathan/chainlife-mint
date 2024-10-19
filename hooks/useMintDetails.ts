import { useContract } from "./useContract";
import { useCurrentSupply } from "./useCurrentSupply";
import { useIsMintLive } from "./useIsMintLive";

export const useMintDetails = () => {
  const { contract } = useContract();

  const isMintLive = useIsMintLive(contract);
  const currentSupply = useCurrentSupply(contract);

  const mintPrice = 0.0275;
  const discountPrice = 0.0275;
  const shiftFee = 0.0001;
  const maxSupply = 1024;
  const maxMint = 1;

  return {
    currentSupply,
    discountPrice,
    isMintLive,
    maxMint,
    maxSupply,
    mintPrice,
    shiftFee,
  };
};
