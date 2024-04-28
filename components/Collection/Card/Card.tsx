import Link from "next/link";
import React from "react";

import type { TokenAbbr } from "services/azureApi/types";

import * as St from "./Card.styled";

interface Props {
  token: TokenAbbr;
}

const Card: React.FC<Props> = ({ token }) => {
  const {
    image,
    name,
    script_inputs: { level_shift, transfer_count },
    token_id,
  } = token;

  return (
    <St.Container>
      <St.Wrapper>
        <Link href={`/token/${token_id.toString()}`}>
          <St.PreviewImage src={image} />
        </Link>
        <St.DescriptionDiv>
          <Link href={`/token/${token_id.toString()}`}>
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
