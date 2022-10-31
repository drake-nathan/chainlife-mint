import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { IoCaretForwardCircleOutline } from 'react-icons/io5';
import * as St from './IdForm.Styled';

const TokenIdForm = () => {
  const router = useRouter();
  const [tokenId, settokenId] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    router.push(`/token/${tokenId}`);
  };

  return (
    <>
      <St.InstructionLabel>
        You can access a token by interacting with the <strong>Worldview </strong> above
        or by entering an ID below.
      </St.InstructionLabel>

      <St.Form onSubmit={handleSubmit}>
        <St.LabelDiv>
          <St.Label htmlFor="enter-id">
            <St.IdFormLabel>Enter Token Id</St.IdFormLabel>
          </St.Label>
          <St.InputContainer>
            <St.Input
              type="text"
              id="enter-id"
              required
              value={tokenId}
              onChange={(e) => settokenId(e.target.value)}
            />
            <St.SmallButton onSubmit={handleSubmit}>
              {/* <IoCaretForwardCircleOutline /> */} GO
            </St.SmallButton>
          </St.InputContainer>
          <St.Asterisk>* must be a number between 0 and 120.</St.Asterisk>
        </St.LabelDiv>
      </St.Form>
    </>
  );
};

export default TokenIdForm;
