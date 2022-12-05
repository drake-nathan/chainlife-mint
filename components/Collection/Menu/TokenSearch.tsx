import React, { useEffect, useState } from 'react';
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
  const { currentSupply, maxSupply } = useMintDetails();
  const maxToken = currentSupply ? currentSupply - 1 : maxSupply - 1;

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
    } else if (errorText) {
      setTimeout(() => setErrorText(''), 3000);
    }
  }, [errors.tokenId, errorText]);

  useEffect(() => {
    if (currentSupply && tokenId && tokenId > maxToken) {
      setErrorText('Max Token ID is ' + maxToken);
      setTokenId(currentSupply - 1);
    } else if (tokenId && tokenId < 0) {
      setErrorText('Min Token ID is 0');
      setTokenId(0);
    } else if (Number.isNaN(tokenId)) setTokenId(null);
  }, [tokenId]);

  return (
    <>
      {errorText && <St.ErrorText>{errorText}</St.ErrorText>}
      <St.Form id="token-page-form" onSubmit={handleSubmit(onSubmit)}>
        <St.Input
          type="number"
          {...register('tokenId', {
            valueAsNumber: true,
            max: {
              value: currentSupply ? currentSupply - 1 : maxSupply,
              message: 'Must be less than current supply.',
            },
          })}
          id="enter-id"
          value={tokenId || tokenId === 0 ? tokenId : ''}
          autoComplete="off"
          onChange={(e) => setTokenId(parseInt(e.target.value))}
          placeholder="Token ID Search"
          onBlur={() => {
            if (tokenId === null || (tokenId === undefined && tokenId !== 0)) {
              setTokenId(null);
              refetch();
            }
          }}
        />
      </St.Form>
    </>
  );
};

export default TokenSearch;
