import React from 'react';
import { IProject } from 'services/azureApi/types';
import * as St from './Menu.styled';

interface Props {
  project: IProject;
  sortDir: 'asc' | 'desc';
  setSortDir: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  sortType: 'tokenId' | 'worldLevel';
  setSortType: React.Dispatch<React.SetStateAction<'tokenId' | 'worldLevel'>>;
}

const CollectionMenu: React.FC<Props> = ({
  project,
  sortDir,
  setSortDir,
  sortType,
  setSortType,
}) => {
  const { current_supply } = project;

  return (
    <St.Container>
      <St.Text>Total mints: {current_supply}</St.Text>
      <St.SortDiv>
        <St.Text>Sort by:</St.Text>
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
          <St.SortIconAsc onClick={() => setSortDir('desc')} />
        ) : (
          <St.SortIconDesc onClick={() => setSortDir('asc')} />
        )}
      </St.SortDiv>
    </St.Container>
  );
};

export default CollectionMenu;
