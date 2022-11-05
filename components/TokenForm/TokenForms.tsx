import React, { useState } from 'react';
import CustomRuleForm from './CustomRuleForm';
import ShiftLevelsForm from './ShiftLevelsForm';
import { crText, slText } from './FormText';
import * as St from './TokenForms.styled';

interface Props {
  tokenId: number;
  setIsTxPending: React.Dispatch<React.SetStateAction<boolean>>;
}

const TokenForms: React.FC<Props> = ({ tokenId, setIsTxPending }) => {
  const [activeSection, setActiveSection] = useState<1 | 2>(1);

  const customRuleInfo = '';

  return (
    <St.Container>
      <St.TitleDiv>
        <St.Title>OWNER CONTROLS</St.Title>
      </St.TitleDiv>
      <St.SubTitleDiv>
        <St.SubTitle
          onClick={() => setActiveSection(1)}
          className={activeSection === 1 ? '' : 'inactive'}
        >
          CUSTOM RULE
        </St.SubTitle>
        <St.SubTitle>|</St.SubTitle>
        <St.SubTitle
          onClick={() => setActiveSection(2)}
          className={activeSection === 2 ? '' : 'inactive'}
        >
          SHIFT LEVELS
        </St.SubTitle>
      </St.SubTitleDiv>
      <St.FormInfoContainer>
        <St.FormInfo>
          {activeSection === 1 ? crText : slText}{' '}
          <a
            href="https://chainlife.gitbook.io/docs/start-here/introduction"
            target="blank"
            rel="noreferrer"
            style={{ color: '#3a3a3a', textDecoration: 'underline' }}
          >
            docs.
          </a>
        </St.FormInfo>
      </St.FormInfoContainer>

      {activeSection === 1 ? (
        <CustomRuleForm tokenId={tokenId} setIsTxPending={setIsTxPending} />
      ) : (
        <ShiftLevelsForm tokenId={tokenId} setIsTxPending={setIsTxPending} />
      )}
    </St.Container>
  );
};

export default TokenForms;
