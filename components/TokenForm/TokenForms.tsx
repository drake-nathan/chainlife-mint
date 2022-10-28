import React, { useState } from 'react';
import CustomRuleForm from './CustomRuleForm';
import * as St from './TokenForms.styled';

interface Props {
  tokenId: number;
}

const TokenForms: React.FC<Props> = ({ tokenId }) => {
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

      <CustomRuleForm tokenId={tokenId} />
    </St.Container>
  );
};

export default TokenForms;
