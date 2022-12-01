import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TokenAbbr } from 'services/azureApi/types';
import * as St from './Card.styled';

interface Props {
  token: TokenAbbr;
}

const Card: React.FC<Props> = ({ token }) => {
  const {
    name,
    image,
    token_id,
    script_inputs: { transfer_count, level_shift },
  } = token;

  return (
    <St.Container>
      <St.Wrapper>
        <Link href={`/token/${token_id}`}>
          <St.PreviewImage src={image} />
        </Link>
        <St.DescriptionDiv>
          <Link href={`/token/${token_id}`}>
            <St.Title>{name}</St.Title>
          </Link>
          <St.Text>Level Shift: {level_shift}</St.Text>
          <St.Text>Transfers: {transfer_count}</St.Text>
        </St.DescriptionDiv>
      </St.Wrapper>
    </St.Container>
  );
};

export default Card;
