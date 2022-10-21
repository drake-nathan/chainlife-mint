import React, { useState } from 'react';
import * as St from './Description.styled';
import Socials from '../Socials/Socials';
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
          SECTION 1
        </St.Title>
        <St.Title>|</St.Title>
        <St.Title
          onClick={() => setActiveSection(2)}
          className={activeSection === 2 ? '' : 'inactive'}
        >
          SECTION 2
        </St.Title>
      </St.SectionTitleContainer>
      <St.SubTitle>SECTION SUBTITLE</St.SubTitle>
      <St.SubtleDiv>
        <St.SubtleText>
          {' '}
          {activeSection === 2 ? section2Text : section1Text}
        </St.SubtleText>
      </St.SubtleDiv>
      <Socials />
    </St.HeroContainer>
  );
};

export default DescriptionSections;
