import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useContract } from 'hooks/useContract';
import { callCustomRule } from 'web3/web3Fetches';
import * as St from './TokenForms.styled';

type ICustomRule = { customRule: string };

interface Props {
  tokenId: number;
}

const CustomRuleForm: React.FC<Props> = ({ tokenId }) => {
  const { active, account } = useWeb3React();
  const { goerliContract } = useContract();

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
          goerliContract,
          account as string,
          tokenId,
          customRule,
        );

        console.info(tx);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (errors.customRule && errors.customRule.message) {
      setErrorText(errors.customRule.message);
    }
  }, [errors]);

  return (
    <St.Form id="custom-rule-form" onSubmit={handleSubmit(onSubmit)}>
      <St.LabelDiv>
        <St.Input
          {...register('customRule', {
            required: { value: true, message: 'This field is required.' },
            maxLength: { value: 23, message: 'This symbol is too long.' },
          })}
          id="custom-rule"
          placeholder="Submit a custom rule"
          value={customRule}
          onChange={(e) => setCustomRule(e.target.value)}
        />
        {errorText && <St.ErrorText>{errorText}</St.ErrorText>}
      </St.LabelDiv>

      <St.Button onSubmit={handleSubmit(onSubmit)}>Submit</St.Button>
    </St.Form>
  );
};

export default CustomRuleForm;
