import React, { useState, useEffect } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import { section1Text, section1AText, section2Text, section2AText } from './SectionText';
import * as St from './Description.styled';

const DescriptionSections: React.FC = () => {
  const { discountPrice, mintPrice, publicStart } = useMintDetails();
  const [activeSection, setActiveSection] = useState(1);

  const curDate = new Date();

  useEffect(() => {
    if (curDate > publicStart) {
      setActiveSection(2);
    }
  }, [publicStart]);

  return (
    <St.HeroContainer>
      <St.SectionTitleContainer>
        <St.Title
          onClick={() => setActiveSection(1)}
          className={activeSection === 1 ? '' : 'inactive'}
        >
          ZEN. MINT
        </St.Title>
        <St.Title>|</St.Title>
        <St.Title
          onClick={() => setActiveSection(2)}
          className={activeSection === 2 ? '' : 'inactive'}
        >
          PUBLIC{' '}
        </St.Title>
      </St.SectionTitleContainer>
      <St.SubTitle>
        {curDate < publicStart && activeSection === 2
          ? `Starts ${publicStart.toLocaleString()}`
          : ''}
        <br />
        <br />
        {activeSection === 1
          ? 'Minting wallet must hold eligible token.'
          : '1 Mint per transaction'}{' '}
        <br />
        {activeSection === 1
          ? `Cost Per Mint: ${discountPrice} ETH`
          : `Cost Per Mint: ${mintPrice} ETH`}
      </St.SubTitle>
      <St.SubtleDiv>
        <St.SubtleText>
          {' '}
          {activeSection === 2 ? section2Text : section1Text}{' '}
        </St.SubtleText>
        <St.SubtleText className={activeSection === 1 ? 'one' : 'two'}>
          {activeSection === 2 ? section2AText : section1AText}{' '}
          {activeSection === 2 ? (
            <a
              href="https://docs.chainlife.xyz/"
              target="blank"
              rel="noreferrer"
              style={{
                textDecoration: 'underline',
                color: '#3a3a3a',
                fontWeight: '500',
              }}
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
