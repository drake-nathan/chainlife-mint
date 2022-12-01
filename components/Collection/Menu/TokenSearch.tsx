import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './TokenSearch.styled';

type IToken = { tokenId: number };

interface Props {
  tokenId: number | null;
  setTokenId: React.Dispatch<React.SetStateAction<number | null>>;
  refetch: () => void;
}

const TokenSearch: React.FC<Props> = ({ tokenId, setTokenId, refetch }) => {
  const router = useRouter();
  const { currentSupply } = useMintDetails();

  const [errorText, setErrorText] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IToken>();

  const onSubmit: SubmitHandler<IToken> = () => {
    refetch();
  };

  useEffect(() => {
    if (errors.tokenId && errors.tokenId.message) {
      setErrorText(errors.tokenId.message);
      setTimeout(() => setErrorText(''), 3000);
    }
  }, [errors.tokenId]);

  useEffect(() => {
    if (currentSupply && tokenId && tokenId > currentSupply - 1) {
      setTokenId(currentSupply - 1);
    } else if (tokenId && tokenId < 0) {
      setTokenId(0);
    }
  }, [tokenId]);

  return (
    <>
      <St.Form id="token-page-form" onSubmit={handleSubmit(onSubmit)}>
        <St.Input
          type="number"
          {...register('tokenId', {
            valueAsNumber: true,
            max: {
              value: currentSupply ? currentSupply - 1 : 4096,
              message: 'Must be less than current supply.',
            },
          })}
          id="enter-id"
          value={tokenId || ''}
          autoComplete="off"
          onChange={(e) => setTokenId(parseInt(e.target.value))}
          placeholder="Token ID Search"
        />
      </St.Form>
      {errorText && <St.ErrorText>{errorText}</St.ErrorText>}
    </>
  );
};

export default TokenSearch;
