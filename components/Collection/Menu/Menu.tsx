import React, { useEffect, useState } from 'react';
import TokenSearch from './TokenSearch';
import { IProject, TxCounts } from 'services/azureApi/types';
import { fetchTxCounts } from 'services/azureApi/fetches';
import * as St from './Menu.styled';
import { intlNumberFormat } from 'utils/helpers';

interface Props {
  project: IProject | null;
  sortDir: 'asc' | 'desc';
  setSortDir: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  sortType: 'tokenId' | 'worldLevel';
  setSortType: React.Dispatch<React.SetStateAction<'tokenId' | 'worldLevel'>>;
  tokenSearchId: number | null;
  setTokenSearchId: React.Dispatch<React.SetStateAction<number | null>>;
  refetch: () => void;
}

const CollectionMenu: React.FC<Props> = ({
  project,
  sortDir,
  setSortDir,
  sortType,
  setSortType,
  tokenSearchId,
  setTokenSearchId,
  refetch,
}) => {
  const [txCounts, setTxCounts] = useState<TxCounts>();

  useEffect(() => {
    if (project) {
      fetchTxCounts(project.project_slug).then(setTxCounts).catch(console.error);
    }
  }, [project]);

  const totalOffsets = 40_000;
  const offsetsRemaining = txCounts?.total ? totalOffsets - txCounts.total : totalOffsets;

  return (
    <St.Container>
      <St.StatsDiv>
        <St.Title>Collection Stats</St.Title>
        <St.Stat>
          {project?.current_supply && intlNumberFormat(project?.current_supply)} /{' '}
          {intlNumberFormat(4096)}&nbsp; Tokens Minted
        </St.Stat>
        <St.Stat>
          Level Shifts:&nbsp;{' '}
          {txCounts?.levelShifts && intlNumberFormat(txCounts?.levelShifts)}
        </St.Stat>
        <St.Stat>
          Custom Rules:&nbsp;{' '}
          {txCounts?.customRules && intlNumberFormat(txCounts?.customRules)}
        </St.Stat>
        <St.Stat>
          Token Transfers:&nbsp;{' '}
          {txCounts?.transfers && intlNumberFormat(txCounts?.transfers)}
        </St.Stat>
        <St.Stat>
          Collection Transactions:&nbsp;{' '}
          {txCounts?.total && intlNumberFormat(txCounts?.total)}
        </St.Stat>
        <St.Stat>
          Carbon Offsets Remaining:&nbsp; {intlNumberFormat(offsetsRemaining)}
        </St.Stat>
      </St.StatsDiv>

      <St.RightDiv>
        <TokenSearch
          tokenId={tokenSearchId}
          setTokenId={setTokenSearchId}
          refetch={refetch}
        />
        <St.SortDiv>
          <St.SortText>Sort by:</St.SortText>
          <St.TextButton
            className={sortType === 'tokenId' ? '' : 'inactive'}
            onClick={() => {
              if (sortType === 'worldLevel') setSortDir('asc');
              setSortType('tokenId');
            }}
          >
            Token ID
          </St.TextButton>
          <St.SubtleText>|</St.SubtleText>
          <St.TextButton
            className={sortType === 'worldLevel' ? '' : 'inactive'}
            onClick={() => {
              if (sortType === 'tokenId') setSortDir('desc');
              setSortType('worldLevel');
            }}
          >
            World Level
          </St.TextButton>
          <St.SortButton>
            {sortDir === 'asc' ? (
              <St.SortIconAsc className="icon" onClick={() => setSortDir('desc')} />
            ) : (
              <St.SortIconDesc className="icon" onClick={() => setSortDir('asc')} />
            )}
          </St.SortButton>
        </St.SortDiv>
      </St.RightDiv>
    </St.Container>
  );
};

export default CollectionMenu;
