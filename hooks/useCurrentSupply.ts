import type { Contract } from "web3-eth-contract";

import { useQuery } from "react-query";

import { fetchCurrentSupply } from "services/web3/contractInteractions";

export const useCurrentSupply = (contract: Contract): number | undefined => {
  const { data: currentSupply, error } = useQuery<number>(
    "current-supply",
    () => fetchCurrentSupply(contract),
  );

  if (error) throw new Error("Error fetching mint stage", { cause: error });

  return currentSupply;
};
