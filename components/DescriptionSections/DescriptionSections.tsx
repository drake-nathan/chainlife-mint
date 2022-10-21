import React, { useState } from 'react';
import * as St from './Description.styled';
import Socials from '../Socials/Socials';
import { section1Text, section2Text } from './SectionText';

const DescriptionSections: React.FC = () => {
  const [isSection1Active, setIsSection1Active] = useState(true);
  const [isSection2Active, setIsSection2Active] = useState(false);

  const handleSection1Click = () => {
    if (isSection2Active) {
      setIsSection2Active(false);
      setIsSection1Active(true);
    }
  };

  const handleSection2Click = () => {
    if (isSection1Active) {
      setIsSection2Active(true);
      setIsSection1Active(false);
    }
  };

  return (
    <St.HeroContainer>
      <St.SectionTitleContainer>
        <St.Title
          onClick={handleSection1Click}
          className={isSection1Active ? '' : 'inactive'}
        >
          SECTION 1
        </St.Title>
        <St.Title>|</St.Title>
        <St.Title
          onClick={handleSection2Click}
          className={isSection2Active ? '' : 'inactive'}
        >
          SECTION 2
        </St.Title>
      </St.SectionTitleContainer>
      <St.SubTitle>SECTION SUBTITLE</St.SubTitle>
      <St.SubtleDiv>
        <St.SubtleText>
          {' '}
          {isSection2Active ? section2Text : section1Text}
        </St.SubtleText>
      </St.SubtleDiv>
      <Socials />
    </St.HeroContainer>
  );
};

export default DescriptionSections;
