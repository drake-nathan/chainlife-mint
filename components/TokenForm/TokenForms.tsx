import React, { useState } from "react";

import CustomRuleForm from "./CustomRuleForm";
import { crText, slText } from "./FormText";
import ShiftLevelsForm from "./ShiftLevelsForm";
import * as St from "./TokenForms.styled";
import ErrorModal from "components/Modals/ErrorModal";

interface Props {
  isOwner: boolean;
  tokenId: number;
}

const TokenForms: React.FC<Props> = ({ isOwner, tokenId }) => {
  const [activeSection, setActiveSection] = useState<1 | 2>(1);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
            className={activeSection === 1 ? "" : "inactive"}
            onClick={() => setActiveSection(1)}
          >
            CUSTOM RULE
          </St.SubTitle>
          <St.SubTitle>|</St.SubTitle>
          <St.SubTitle
            className={activeSection === 2 ? "" : "inactive"}
            onClick={() => setActiveSection(2)}
          >
            SHIFT LEVELS
          </St.SubTitle>
        </St.SubTitleDiv>
        <St.FormInfoContainer>
          <St.FormInfo>
            {activeSection === 1 ? crText : slText}{" "}
            <a
              href="https://docs.chainlife.xyz/start-here/introduction"
              rel="noreferrer"
              style={{
                color: "#3a3a3a",
                fontWeight: 500,
                textDecoration: "underline",
              }}
              target="blank"
            >
              docs.
            </a>
          </St.FormInfo>
        </St.FormInfoContainer>
        {activeSection === 1 ? (
          <CustomRuleForm
            handleError={handleError}
            isOwner={isOwner}
            tokenId={tokenId}
          />
        ) : (
          <ShiftLevelsForm
            handleError={handleError}
            isOwner={isOwner}
            tokenId={tokenId}
          />
        )}
      </St.Container>

      {showErrorModal && (
        <ErrorModal message={errorMessage} setShowModal={setShowErrorModal} />
      )}
    </>
  );
};

export default TokenForms;
