import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import * as St from "./IdForm.Styled";
import { useMintDetails } from "hooks/useMintDetails";

type IToken = { tokenId: number };

const TokenIdForm = () => {
  const router = useRouter();
  const { currentSupply } = useMintDetails();

  const [tokenId, settokenId] = useState<number>(0);
  const [errorText, setErrorText] = useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IToken>();

  const onSubmit: SubmitHandler<IToken> = () => {
    void router.push(`/token/${tokenId}`);
  };

  useEffect(() => {
    if (errors.tokenId && errors.tokenId.message) {
      setErrorText(errors.tokenId.message);
      setTimeout(() => setErrorText(""), 3000);
    }
  }, [errors.tokenId]);

  useEffect(() => {
    if (tokenId < 0) settokenId(0);
    if (currentSupply) {
      if (tokenId > currentSupply) settokenId(currentSupply);
    }
  }, [currentSupply, tokenId]);

  return (
    <>
      <St.Form id="token-page-form" onSubmit={void handleSubmit(onSubmit)}>
        <St.LabelDiv>
          <St.Label htmlFor="enter-id">
            <St.IdFormLabel>Enter Token Id</St.IdFormLabel>
          </St.Label>

          <St.InputContainer>
            <St.Input
              type="number"
              {...register("tokenId", {
                max: {
                  message: "Must be less than current supply.",
                  value: currentSupply ? currentSupply - 1 : 4096,
                },
                valueAsNumber: true,
              })}
              autoComplete="off"
              id="enter-id"
              onChange={(e) => settokenId(parseInt(e.target.value))}
              value={tokenId}
            />
            <St.SmallButton type="submit">GO</St.SmallButton>
          </St.InputContainer>

          {currentSupply && !errorText && (
            <St.Asterisk>
              * must be a number between 0 and {currentSupply - 1}.
            </St.Asterisk>
          )}
          {errorText && <St.Asterisk>{errorText}</St.Asterisk>}
        </St.LabelDiv>
      </St.Form>
    </>
  );
};

export default TokenIdForm;
