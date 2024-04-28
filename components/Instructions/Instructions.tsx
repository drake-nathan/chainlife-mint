import React from "react";

import * as St from "./Instructions.styled";
import { instructions } from "./steps";

interface Props {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const Instructions: React.FC<Props> = ({ activeStep, setActiveStep }) => {
  const maxSteps = instructions.length;

  return (
    <>
      {activeStep > 0 && (
        <St.StepContainer
          onClick={
            activeStep < maxSteps
              ? () => setActiveStep(activeStep + 1)
              : () => setActiveStep(0)
          }
        >
          {activeStep > 0 &&
            instructions[activeStep - 1].map((line, l) => (
              <St.Step key={`${activeStep.toString()}.${l + 1}`}>
                {line}
              </St.Step>
            ))}
        </St.StepContainer>
      )}
    </>
  );
};

export default Instructions;
