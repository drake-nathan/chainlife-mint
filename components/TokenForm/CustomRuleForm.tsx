import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import * as St from "./TokenForms.styled";
import { useContract } from "hooks/useContract";
import {
  callCustomRule,
  callResetRule,
} from "services/web3/contractInteractions";

interface ICustomRule {
  customRule: string;
}

interface Props {
  handleError: (error: string) => void;
  isOwner: boolean;
  tokenId: number;
}

const CustomRuleForm: React.FC<Props> = ({ handleError, isOwner, tokenId }) => {
  const { account, active } = useWeb3React();
  const { contract } = useContract();

  const [customRule, setCustomRule] = useState("");
  const [errorText, setErrorText] = useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ICustomRule>();

  const onSubmit: SubmitHandler<ICustomRule> = async () => {
    if (!active) {
      handleError("Must be connected to wallet.");
    } else if (!isOwner) {
      handleError("Must be owner of token.");
    } else {
      try {
        await callCustomRule(contract, account as string, tokenId, customRule);
      } catch (error) {
        console.error(error);
        handleError("Error setting custom rule.");
      }
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setCustomRule("");
    if (!active) {
      handleError("Must be connected to wallet.");
    } else if (!isOwner) {
      handleError("Must be owner of token.");
    } else {
      try {
        void callResetRule(contract, account as string, tokenId);
      } catch (error) {
        console.error(error);
        handleError("Error resetting rule.");
      }
    }
  };

  useEffect(() => {
    if (errors.customRule?.message) {
      setErrorText(errors.customRule.message);
      setTimeout(() => setErrorText(""), 3000);
    }
  }, [errors.customRule]);

  return (
    <>
      <St.Form id="custom-rule-form" onSubmit={void handleSubmit(onSubmit)}>
        <St.Input
          {...register("customRule", {
            maxLength: {
              message: "This rule is too long, 23 chars max.",
              value: 23,
            },
            required: { message: "This field is required.", value: true },
          })}
          id="custom-rule"
          onChange={(e) => setCustomRule(e.target.value)}
          placeholder="Submit a Custom Rule"
          value={customRule}
        />
        <St.ButtonDiv>
          <St.Button type="submit">Submit</St.Button>
          <St.Refresh onClick={(e) => handleReset(e)}>Reset Rule</St.Refresh>
        </St.ButtonDiv>
      </St.Form>
      {errorText && <St.ErrorText>{errorText}</St.ErrorText>}
    </>
  );
};

export default CustomRuleForm;
