import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io5';
import * as St from './TokenForms.styled';
import { useRouter } from 'next/router';

const TokenIdForm = () => {
  const router = useRouter();
  const [tokenId, settokenId] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    router.push(`/token/${tokenId}`);
  };

  return (
    <>
      <St.Label>
        You can access a token by interacting with the <strong>Worldview </strong> above
        or by entering an ID below.
      </St.Label>

      <St.Form onSubmit={handleSubmit}>
        <St.LabelDiv>
          <St.Label htmlFor="enter-id">
            <St.IdFormLabel>Enter Token Id</St.IdFormLabel>
          </St.Label>

          <St.Input
            type="text"
            id="enter-id"
            required
            value={tokenId}
            onChange={(e) => settokenId(e.target.value)}
          />
          <St.Asterisk>* must be a number between 1 and 100.</St.Asterisk>
        </St.LabelDiv>
        <St.SmallButton onSubmit={handleSubmit}>
          <IoIcons.IoCaretForwardCircleOutline />
        </St.SmallButton>
      </St.Form>
    </>
  );
};

export default TokenIdForm;
