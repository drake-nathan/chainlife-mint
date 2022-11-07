import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useContract } from 'hooks/useContract';
import { callShiftLevels } from 'services/web3/contractInteractions';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './TokenForms.styled';

type IShiftLevels = { levelShift: number };

interface Props {
  tokenId: number;
  setIsTxPending: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShiftLevelsForm: React.FC<Props> = ({ tokenId, setIsTxPending }) => {
  const { active, account } = useWeb3React();
  const { contract } = useContract();
  const { shiftFee } = useMintDetails();

  const [levelShift, setLevelShift] = useState<number>(0);
  const [errorText, setErrorText] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShiftLevels>();

  const onSubmit: SubmitHandler<IShiftLevels> = async () => {
    if (!active) {
      setErrorText('Must be connected to wallet');
    } else {
      if (levelShift) {
        try {
          const tx = await callShiftLevels(
            contract.mainnet,
            account as string,
            tokenId,
            levelShift,
            shiftFee,
          );

          if (tx) setIsTxPending(true);
        } catch (error) {
          console.error(error);
        } finally {
          setIsTxPending(false);
        }
      }
    }
  };

  useEffect(() => {
    if (errors.levelShift && errors.levelShift.message) {
      setErrorText(errors.levelShift.message);
    }
  }, [errors]);

  return (
    <>
      <St.Form id="level-shift-form" onSubmit={handleSubmit(onSubmit)}>
        <St.Input
          type="number"
          {...register('levelShift', {
            valueAsNumber: true,
            required: { value: true, message: 'This field is required.' },
          })}
          id="level-shift"
          placeholder="Submit a Level Shift"
          value={levelShift || ''}
          onChange={(e) => setLevelShift(parseInt(e.target.value))}
        />
        <St.Button type="submit">Submit</St.Button>
      </St.Form>
      {errorText && <St.ErrorText>{errorText}</St.ErrorText>}
    </>
  );
};

export default ShiftLevelsForm;
