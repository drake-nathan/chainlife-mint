import { useWeb3React } from '@web3-react/core';
import { useContract } from 'hooks/useContract';
import React, { useState } from 'react';
import { callCustomRule } from 'web3/web3Fetches';
import * as St from './Description.styled';
import * as StForm from './TokenForms.styled';

interface Props {
  tokenId: number;
}

const TokenForms: React.FC<Props> = ({ tokenId }) => {
  const { active, account } = useWeb3React();
  const { goerliContract } = useContract();

  const [activeSection, setActiveSection] = useState(1);
  const [customRule, setCustomRule] = useState('');

  const handleSubmit = async () => {
    console.log('submitting');
    try {
      if (!active) throw new Error('Must be connected to wallet');

      const tx = await callCustomRule(
        goerliContract,
        account as string,
        tokenId,
        customRule,
      );

      console.info(tx);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <St.HeroContainer>
      <St.SectionTitleContainer>
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
      </St.SectionTitleContainer>
      <StForm.Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <StForm.LabelDiv>
          <StForm.Label htmlFor="custom-rule">
            Submit a Custom Rule
          </StForm.Label>
          <StForm.Input
            type="text"
            id="custom-rule"
            required
            value={customRule}
            onChange={(e) => setCustomRule(e.target.value)}
          />
        </StForm.LabelDiv>
      </StForm.Form>
      <St.Button
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </St.Button>
    </St.HeroContainer>
  );
};

export default TokenForms;
