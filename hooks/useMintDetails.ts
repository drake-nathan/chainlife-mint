import { useContract } from "./useContract";
import { useCurrentSupply } from "./useCurrentSupply";
import { useIsMintLive } from "./useIsMintLive";

export const useMintDetails = () => {
  const { contract } = useContract();

  const isMintLive = useIsMintLive(contract);
  const currentSupply = useCurrentSupply(contract);

  const mintPrice = 0.08;
  const discountPrice = 0.08;
  const shiftFee = 0.001;
  const maxSupply = 4096;
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
