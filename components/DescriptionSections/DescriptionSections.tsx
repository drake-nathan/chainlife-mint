import React, { useState } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import { section1Text, section2Text } from './SectionText';
import * as St from './Description.styled';

const DescriptionSections: React.FC = () => {
  const { discountPrice, mintPrice } = useMintDetails();
  const [activeSection, setActiveSection] = useState(1);

  return (
    <St.HeroContainer>
      <St.SectionTitleContainer>
        <St.Title
          onClick={() => setActiveSection(1)}
          className={activeSection === 1 ? '' : 'inactive'}
        >
          PRESALE
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
        <br />
        {activeSection === 1
          ? `(Cost Per Mint: ${discountPrice} ETH)`
          : `(Cost Per Mint: ${mintPrice} ETH)`}
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
