import React from 'react';
import { IProject } from 'services/azureApi/types';
import TokenSearch from './TokenSearch';
import * as St from './Menu.styled';

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
  return (
    <St.Container>
      <St.LeftDiv>
        <St.Text>Total mints: {project?.current_supply}</St.Text>
        <TokenSearch
          tokenId={tokenSearchId}
          setTokenId={setTokenSearchId}
          refetch={refetch}
        />
      </St.LeftDiv>

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
        {sortDir === 'asc' ? (
          <St.SortIconAsc className="icon" onClick={() => setSortDir('desc')} />
        ) : (
          <St.SortIconDesc className="icon" onClick={() => setSortDir('asc')} />
        )}
      </St.SortDiv>
    </St.Container>
  );
};

export default CollectionMenu;
