import React from 'react';
import { IToken } from 'azureApi/types';
import * as St from './Traits.styled';

interface Props {
  token: IToken;
}

const Traits: React.FC<Props> = ({ token }) => {
  const { attributes } = token;

  return (
    <>
      <St.Container>
        <St.TitleDiv>
          <St.NewTitle>TRAITS</St.NewTitle>
        </St.TitleDiv>
        <St.Table>
          <St.HeaderContainer>
            <St.Header>Trait</St.Header>
            <St.Header>Value</St.Header>
          </St.HeaderContainer>
          <St.TableWrapper>
            <St.TableBody>
              {attributes.map((trait) => (
                <St.RowContainer key={trait.trait_type}>
                  <St.Row>{trait.trait_type}</St.Row>
                  <St.Row>{trait.value}</St.Row>
                </St.RowContainer>
              ))}
            </St.TableBody>
          </St.TableWrapper>
        </St.Table>
      </St.Container>
    </>
  );
};

export default Traits;
