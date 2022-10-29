import React, { useState } from 'react';
import CustomRuleForm from './CustomRuleForm';
import ShiftLevelsForm from './ShiftLevelsForm';
import * as St from './TokenForms.styled';

interface Props {
  tokenId: number;
  setIsTxPending: React.Dispatch<React.SetStateAction<boolean>>;
}

const TokenForms: React.FC<Props> = ({ tokenId, setIsTxPending }) => {
  const [activeSection, setActiveSection] = useState<1 | 2>(1);

  return (
    <St.Container>
      <St.TitleDiv>
        <St.Title
          onClick={() => setActiveSection(1)}
          className={activeSection === 1 ? '' : 'inactive'}
        >
          CUSTOM RULE
        </St.Title>
        <St.Title>|</St.Title>
        <St.Title
          onClick={() => setActiveSection(2)}
          className={activeSection === 2 ? '' : 'inactive'}
        >
          SHIFT LEVELS
        </St.Title>
      </St.TitleDiv>

      {activeSection === 1 ? (
        <CustomRuleForm tokenId={tokenId} setIsTxPending={setIsTxPending} />
      ) : (
        <ShiftLevelsForm tokenId={tokenId} setIsTxPending={setIsTxPending} />
      )}
    </St.Container>
  );
};

export default TokenForms;
