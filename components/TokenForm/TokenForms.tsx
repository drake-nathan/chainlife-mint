import React, { useState } from 'react';
import CustomRuleForm from './CustomRuleForm';
import ShiftLevelsForm from './ShiftLevelsForm';
import ErrorModal from 'components/Modals/ErrorModal';
import { crText, slText } from './FormText';
import * as St from './TokenForms.styled';

interface Props {
  isOwner: boolean;
  tokenId: number;
}

const TokenForms: React.FC<Props> = ({ isOwner, tokenId }) => {
  const [activeSection, setActiveSection] = useState<1 | 2>(1);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleError = (error: string) => {
    setErrorMessage(error);
    setShowErrorModal(true);
  };

  return (
    <>
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
              href="https://docs.chainlife.xyz/start-here/introduction"
              target="blank"
              rel="noreferrer"
              style={{ color: '#3a3a3a', textDecoration: 'underline', fontWeight: 500 }}
            >
              docs.
            </a>
          </St.FormInfo>
        </St.FormInfoContainer>
        {activeSection === 1 ? (
          <CustomRuleForm isOwner={isOwner} tokenId={tokenId} handleError={handleError} />
        ) : (
          <ShiftLevelsForm
            tokenId={tokenId}
            handleError={handleError}
            isOwner={isOwner}
          />
        )}
      </St.Container>

      {showErrorModal && (
        <ErrorModal setShowModal={setShowErrorModal} message={errorMessage} />
      )}
    </>
  );
};

export default TokenForms;
