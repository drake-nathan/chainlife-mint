import React, { useState } from "react";

import * as St from "./Description.styled";
import {
  section1AText,
  section1Text,
  section2AText,
  section2Text,
} from "./SectionText";
import { useMintDetails } from "hooks/useMintDetails";

const DescriptionSections: React.FC = () => {
  const { mintPrice } = useMintDetails();
  const [activeSection, setActiveSection] = useState<1 | 2>(2);

  return (
    <St.HeroContainer>
      <St.SectionTitleContainer>
        <St.Title
          className={activeSection === 1 ? "" : "inactive"}
          onClick={() => setActiveSection(1)}
        >
          ZEN. MINT
        </St.Title>
        <St.Title>|</St.Title>
        <St.Title
          className={activeSection === 2 ? "" : "inactive"}
          onClick={() => setActiveSection(2)}
        >
          PUBLIC{" "}
        </St.Title>
      </St.SectionTitleContainer>
      <St.SubTitle>
        <br />
        <br />
        {activeSection === 1
          ? "Zen. Mint has closed."
          : "1 Mint per transaction"}{" "}
        <br />
        {activeSection === 1
          ? `Token IDs 0 - 123 are Zen. Mints.`
          : `Cost Per Mint: ${mintPrice} ETH`}
      </St.SubTitle>
      <St.SubtleDiv>
        <St.SubtleText>
          {" "}
          {activeSection === 2 ? section2Text : section1Text}{" "}
        </St.SubtleText>
        <St.SubtleText className={activeSection === 1 ? "one" : "two"}>
          {activeSection === 2 ? section2AText : section1AText}{" "}
          {activeSection === 2 ? (
            <a
              href="https://docs.chainlife.xyz/"
              rel="noreferrer"
              style={{
                color: "#3a3a3a",
                fontWeight: "500",
                textDecoration: "underline",
              }}
              target="blank"
            >
              docs.
            </a>
          ) : null}
        </St.SubtleText>
      </St.SubtleDiv>
    </St.HeroContainer>
  );
};

export default DescriptionSections;
