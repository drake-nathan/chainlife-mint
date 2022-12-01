import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useContract } from 'hooks/useContract';
import { callCustomRule, callResetRule } from 'services/web3/contractInteractions';
import * as St from './TokenForms.styled';

type ICustomRule = { customRule: string };

interface Props {
  isOwner: boolean;
  tokenId: number;
  handleError: (error: string) => void;
}

const CustomRuleForm: React.FC<Props> = ({ isOwner, tokenId, handleError }) => {
  const { active, account } = useWeb3React();
  const { contract } = useContract();

  const [customRule, setCustomRule] = useState('');
  const [errorText, setErrorText] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomRule>();

  const onSubmit: SubmitHandler<ICustomRule> = async () => {
    if (!active) {
      handleError('Must be connected to wallet.');
    } else if (!isOwner) {
      handleError('Must be owner of token.');
    } else {
      try {
        const tx = await callCustomRule(contract, account as string, tokenId, customRule);
      } catch (error) {
        console.error(error);
        handleError('Error setting custom rule.');
      }
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setCustomRule('');
    if (!active) {
      handleError('Must be connected to wallet.');
    } else if (!isOwner) {
      handleError('Must be owner of token.');
    } else {
      try {
        callResetRule(contract, account as string, tokenId);
      } catch (error) {
        console.error(error);
        handleError('Error resetting rule.');
      }
    }
  };

  useEffect(() => {
    if (errors.customRule && errors.customRule.message) {
      setErrorText(errors.customRule.message);
      setTimeout(() => setErrorText(''), 3000);
    }
  }, [errors.customRule]);

  return (
    <>
      <St.Form id="custom-rule-form" onSubmit={handleSubmit(onSubmit)}>
        <St.Input
          {...register('customRule', {
            required: { value: true, message: 'This field is required.' },
            maxLength: { value: 23, message: 'This rule is too long, 23 chars max.' },
          })}
          id="custom-rule"
          placeholder="Submit a Custom Rule"
          value={customRule}
          onChange={(e) => setCustomRule(e.target.value)}
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
