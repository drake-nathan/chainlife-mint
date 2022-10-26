import React from 'react';
import { IToken } from 'azureApi/types';
import * as St from './Traits.styled';

interface Props {
  token: IToken;
}

const Traits: React.FC<Props> = ({ token }) => {
  const { attributes } = token;

  return (
    <St.Table>
      <St.TableHead>
        <St.Row>
          <St.Header>Trait</St.Header>
          <St.Header>Value</St.Header>
        </St.Row>
      </St.TableHead>
      <St.TableBody>
        {attributes.map((trait) => (
          <St.Row key={trait.trait_type}>
            <St.Cell>{trait.trait_type}</St.Cell>
            <St.Cell>{trait.value}</St.Cell>
          </St.Row>
        ))}
      </St.TableBody>
    </St.Table>
  );
};

export default Traits;
