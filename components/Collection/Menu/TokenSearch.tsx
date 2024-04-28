import React, { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import * as St from "./TokenSearch.styled";
import { useMintDetails } from "hooks/useMintDetails";

interface IToken {
  tokenId: number;
}

interface Props {
  refetch: () => void;
  setTokenId: React.Dispatch<React.SetStateAction<null | number>>;
  tokenId: null | number;
}

const TokenSearch: React.FC<Props> = ({ refetch, setTokenId, tokenId }) => {
  const { currentSupply, maxSupply } = useMintDetails();
  const maxToken = currentSupply ? currentSupply - 1 : maxSupply - 1;

  const [errorText, setErrorText] = useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IToken>();

  const onSubmit: SubmitHandler<IToken> = () => {
    refetch();
  };

  useEffect(() => {
    if (errors.tokenId?.message) {
      setErrorText(errors.tokenId.message);
      setTimeout(() => setErrorText(""), 3000);
    } else if (errorText) {
      setTimeout(() => setErrorText(""), 3000);
    }
  }, [errors.tokenId, errorText]);

  useEffect(() => {
    if (currentSupply && tokenId && tokenId > maxToken) {
      setErrorText("Max Token ID is " + maxToken.toString());
      setTokenId(currentSupply - 1);
    } else if (tokenId && tokenId < 0) {
      setErrorText("Min Token ID is 0");
      setTokenId(0);
    } else if (Number.isNaN(tokenId)) setTokenId(null);
  }, [currentSupply, maxToken, setTokenId, tokenId]);

  return (
    <>
      {errorText && <St.ErrorText>{errorText}</St.ErrorText>}
      <St.Form id="token-page-form" onSubmit={void handleSubmit(onSubmit)}>
        <St.Input
          type="number"
          {...register("tokenId", {
            max: {
              message: "Must be less than current supply.",
              value: currentSupply ? currentSupply - 1 : maxSupply,
            },
            valueAsNumber: true,
          })}
          autoComplete="off"
          id="enter-id"
          onBlur={() => {
            if (tokenId === null || tokenId !== 0) {
              setTokenId(null);
              refetch();
            }
          }}
          onChange={(e) => setTokenId(parseInt(e.target.value))}
          placeholder="Token ID Search"
          value={tokenId ?? ""}
        />
      </St.Form>
    </>
  );
};

export default TokenSearch;
