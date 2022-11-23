import React, { useEffect, useState } from 'react';
import { TokenAbbr } from 'services/azureApi/types';
import * as St from './Card.styled';

interface Props {
  token: TokenAbbr;
}

const Card: React.FC<Props> = ({ token }) => {
  const { name, image, token_id, thumbnail_url } = token;

  return (
    <St.Container>
      <St.Wrapper>
        <St.ImageDiv>
          <St.PreviewImage src={image} />
        </St.ImageDiv>

        <St.DescriptionDiv>
          <St.Row>
            <St.NftName>{name}</St.NftName>
          </St.Row>
        </St.DescriptionDiv>
      </St.Wrapper>
    </St.Container>
  );
};

export default Card;
