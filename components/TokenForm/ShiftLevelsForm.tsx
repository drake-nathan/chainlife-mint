import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import * as St from "./TokenForms.styled";
import { useContract } from "hooks/useContract";
import { useMintDetails } from "hooks/useMintDetails";
import { callShiftLevels } from "services/web3/contractInteractions";

interface IShiftLevels {
  levelShift: number;
}

interface Props {
  handleError: (error: string) => void;
  isOwner: boolean;
  tokenId: number;
}

const ShiftLevelsForm: React.FC<Props> = ({
  handleError,
  isOwner,
  tokenId,
}) => {
  const { account, active } = useWeb3React();
  const { contract } = useContract();
  const { shiftFee } = useMintDetails();

  const [levelShift, setLevelShift] = useState<number>(0);
  const [errorText, setErrorText] = useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IShiftLevels>();

  const onSubmit: SubmitHandler<IShiftLevels> = async () => {
    if (!active) {
      handleError("Must be connected to wallet");
    } else if (!isOwner) {
      handleError("Must be owner of token.");
    } else {
      if (levelShift) {
        try {
          await callShiftLevels(
            contract,
            account as string,
            tokenId,
            levelShift,
            shiftFee,
          );
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  useEffect(() => {
    if (errors.levelShift?.message) {
      setErrorText(errors.levelShift.message);
      setTimeout(() => setErrorText(""), 3000);
    }
  }, [errors.levelShift]);

  return (
    <>
      <St.Form id="level-shift-form" onSubmit={void handleSubmit(onSubmit)}>
        <St.Input
          type="number"
          {...register("levelShift", {
            required: { message: "This field is required.", value: true },
            valueAsNumber: true,
          })}
          id="level-shift"
          onChange={(e) => setLevelShift(parseInt(e.target.value))}
          placeholder="Submit a Level Shift"
          value={levelShift || ""}
        />
        <St.Button type="submit">Submit</St.Button>
      </St.Form>
      {errorText && <St.ErrorText>{errorText}</St.ErrorText>}
    </>
  );
};

export default ShiftLevelsForm;
