import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useContract } from 'hooks/useContract';
import { callCustomRule } from 'services/web3/contractInteractions';
import * as St from './TokenForms.styled';

type ICustomRule = { customRule: string };

interface Props {
  tokenId: number;
  setIsTxPending: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomRuleForm: React.FC<Props> = ({ tokenId, setIsTxPending }) => {
  const { active, account } = useWeb3React();
  const { contract } = useContract();
  const [ruleSubmitted, setRuleSubmitted] = useState<boolean>(false);

  const [customRule, setCustomRule] = useState('');
  const [errorText, setErrorText] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomRule>();

  const onSubmit: SubmitHandler<ICustomRule> = async () => {
    if (!active) {
      setErrorText('Must be connected to wallet');
    } else {
      try {
        const tx = await callCustomRule(
          contract.mainnet,
          account as string,
          tokenId,
          customRule,
        );

        if (tx) setIsTxPending(true);
      } catch (error) {
        console.error(error);
      } finally {
        setIsTxPending(false);
        setRuleSubmitted(true);
      }
    }
  };

  const handleRefresh = () => {
    setRuleSubmitted(false);
  };

  useEffect(() => {
    if (errors.customRule && errors.customRule.message) {
      setErrorText(errors.customRule.message);
    }
  }, [errors]);

  return (
    <>
      <St.Form id="custom-rule-form" onSubmit={handleSubmit(onSubmit)}>
        <St.Input
          {...register('customRule', {
            maxLength: { value: 23, message: 'This rule is too long, 23 chars max.' },
          })}
          id="custom-rule"
          placeholder="Submit a Custom Rule"
          value={customRule}
          onChange={(e) => setCustomRule(e.target.value)}
        />
        <St.Button type="submit">Submit</St.Button>
        {ruleSubmitted ? (
          <St.Refresh onClick={handleRefresh}>Refresh Rule</St.Refresh>
        ) : null}
      </St.Form>
      {errorText && <St.ErrorText>{errorText}</St.ErrorText>}
    </>
  );
};

export default CustomRuleForm;
