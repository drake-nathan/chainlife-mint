import type { Contract } from "web3-eth-contract";

import { useQuery } from "react-query";

import { getMintPhase } from "services/web3/contractInteractions";

export const useIsMintLive = (contract: Contract): boolean => {
  const { data, error } = useQuery<string>("mint-stage", () =>
    getMintPhase(contract),
  );

  if (error) throw new Error("Error fetching mint stage", { cause: error });

  return data === "1" || data === "2";
};
