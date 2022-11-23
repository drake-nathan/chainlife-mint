import React from 'react';
import { IProject } from 'services/azureApi/types';
import * as St from './Stats.styled';

interface Props {
  project: IProject;
}

const CollectionStats: React.FC<Props> = ({ project }) => {
  const { current_supply } = project;

  return (
    <St.Container>
      <St.Text>Total mints: {current_supply}</St.Text>
    </St.Container>
  );
};

export default CollectionStats;
