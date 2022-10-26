import React, { useState } from 'react';
import * as St from './Description.styled';
import { section1Text, section2Text } from './SectionText';

const DescriptionSections: React.FC = () => {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <St.HeroContainer>
      <St.SectionTitleContainer>
        <St.Title
          onClick={() => setActiveSection(1)}
          className={activeSection === 1 ? '' : 'inactive'}
        >
          PREMINT
        </St.Title>
        <St.Title>|</St.Title>
        <St.Title
          onClick={() => setActiveSection(2)}
          className={activeSection === 2 ? '' : 'inactive'}
        >
          PUBLIC
        </St.Title>
      </St.SectionTitleContainer>
      <St.SubTitle>
        {activeSection === 1
          ? 'Minting wallet must hold eligible token.'
          : '1 Mint per transaction'}{' '}
        {activeSection === 1 ? '(Cost Per Mint: 0.08 ETH)' : ''}
      </St.SubTitle>
      <St.SubtleDiv>
        <St.SubtleText className={activeSection === 1 ? 'one' : 'two'}>
          {' '}
          {activeSection === 2 ? section2Text : section1Text}{' '}
          {activeSection === 2 ? (
            <a
              href="https://chainlife.gitbook.io/docs/"
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
