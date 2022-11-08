import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as St from './IdForm.Styled';
import { useMintDetails } from 'hooks/useMintDetails';

type IToken = { tokenId: number };

const TokenIdForm = () => {
  const router = useRouter();
  const { currentSupply } = useMintDetails();

  const [tokenId, settokenId] = useState<number>(0);
  const [errorText, setErrorText] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IToken>();

  const onSubmit: SubmitHandler<IToken> = () => {
    router.push(`/token/${tokenId}`);
  };

  useEffect(() => {
    if (errors.tokenId && errors.tokenId.message) {
      setErrorText(errors.tokenId.message);
      setTimeout(() => setErrorText(''), 3000);
    }
  }, [errors.tokenId]);

  return (
    <>
      <St.Form id="token-page-form" onSubmit={handleSubmit(onSubmit)}>
        <St.LabelDiv>
          <St.Label htmlFor="enter-id">
            <St.IdFormLabel>Enter Token Id</St.IdFormLabel>
          </St.Label>

          <St.InputContainer>
            <St.Input
              type="number"
              {...register('tokenId', {
                valueAsNumber: true,
                required: { value: true, message: 'This field is required.' },
                max: {
                  value: currentSupply || 4096,
                  message: 'Must be less than current supply.',
                },
              })}
              id="enter-id"
              value={tokenId || ''}
              onChange={(e) => settokenId(parseInt(e.target.value))}
            />
            <St.SmallButton type="submit">GO</St.SmallButton>
          </St.InputContainer>

          {currentSupply && !errorText && (
            <St.Asterisk>* must be a number between 0 and {currentSupply}.</St.Asterisk>
          )}
          {errorText && <St.Asterisk>{errorText}</St.Asterisk>}
        </St.LabelDiv>
      </St.Form>
    </>
  );
};

export default TokenIdForm;
