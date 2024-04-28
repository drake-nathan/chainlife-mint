import React, { useEffect, useState } from "react";

import type { IProject, TxCounts } from "services/azureApi/types";

import * as St from "./Menu.styled";
import TokenSearch from "./TokenSearch";
import { fetchTxCounts } from "services/azureApi/fetches";
import { intlNumberFormat } from "utils/helpers";

interface Props {
  project: IProject | null;
  refetch: () => void;
  setSortDir: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  setSortType: React.Dispatch<React.SetStateAction<"tokenId" | "worldLevel">>;
  setTokenSearchId: React.Dispatch<React.SetStateAction<null | number>>;
  sortDir: "asc" | "desc";
  sortType: "tokenId" | "worldLevel";
  tokenSearchId: null | number;
}

const CollectionMenu: React.FC<Props> = ({
  project,
  refetch,
  setSortDir,
  setSortType,
  setTokenSearchId,
  sortDir,
  sortType,
  tokenSearchId,
}) => {
  const [txCounts, setTxCounts] = useState<TxCounts>();

  useEffect(() => {
    if (project) {
      fetchTxCounts(project.project_slug)
        .then(setTxCounts)
        // eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable
        .catch(console.error);
    }
  }, [project]);

  const totalOffsets = 40_000;
  const offsetsRemaining = project?.tx_count
    ? totalOffsets - project.tx_count
    : totalOffsets;

  return (
    <St.Container>
      <St.StatsDiv>
        <St.Title>Collection Stats</St.Title>
        <St.Stat>
          {project?.current_supply && intlNumberFormat(project.current_supply)}{" "}
          / {intlNumberFormat(4096)}&nbsp; Tokens Minted
        </St.Stat>
        <St.Stat>
          Level Shifts:&nbsp;{" "}
          {txCounts?.levelShifts && intlNumberFormat(txCounts.levelShifts)}
        </St.Stat>
        <St.Stat>
          Custom Rules:&nbsp;{" "}
          {txCounts?.customRules && intlNumberFormat(txCounts.customRules)}
        </St.Stat>
        <St.Stat>
          Token Transfers:&nbsp;{" "}
          {txCounts?.transfers && intlNumberFormat(txCounts.transfers)}
        </St.Stat>
        <St.Stat>
          Collection Transactions:&nbsp;{" "}
          {project?.tx_count && intlNumberFormat(project.tx_count)}
        </St.Stat>
        <St.Stat>
          Carbon Offsets Remaining:&nbsp; {intlNumberFormat(offsetsRemaining)}
        </St.Stat>
      </St.StatsDiv>

      <St.RightDiv>
        <TokenSearch
          refetch={refetch}
          setTokenId={setTokenSearchId}
          tokenId={tokenSearchId}
        />
        <St.SortDiv>
          <St.SortText>Sort by:</St.SortText>
          <St.TextButton
            className={sortType === "tokenId" ? "" : "inactive"}
            onClick={() => {
              if (sortType === "worldLevel") setSortDir("asc");
              setSortType("tokenId");
            }}
          >
            Token ID
          </St.TextButton>
          <St.SubtleText>|</St.SubtleText>
          <St.TextButton
            className={sortType === "worldLevel" ? "" : "inactive"}
            onClick={() => {
              if (sortType === "tokenId") setSortDir("desc");
              setSortType("worldLevel");
            }}
          >
            World Level
          </St.TextButton>
          <St.SortButton>
            {sortDir === "asc" ? (
              <St.SortIconAsc
                className="icon"
                onClick={() => setSortDir("desc")}
              />
            ) : (
              <St.SortIconDesc
                className="icon"
                onClick={() => setSortDir("asc")}
              />
            )}
          </St.SortButton>
        </St.SortDiv>
      </St.RightDiv>
    </St.Container>
  );
};

export default CollectionMenu;
