import React from 'react';
import Image from 'next/image';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './Fallback.Syled';

const FallbackPage: React.FC = () => {
  const { mintStart } = useMintDetails();

  const now = new Date();

  return (
    <>
      <St.FallbackContainer>
        <Image
          src={'/chainlife/chainlife.png'}
          height={50}
          width={50}
          alt="ChainLife logo"
        />
        <St.HDLTitle>Chainlife</St.HDLTitle>
        {mintStart > now ? (
          <>
            <St.Text>
              The Chainlife Mint will begin on {mintStart.toLocaleDateString()} at{' '}
              {mintStart.toLocaleTimeString()}.
            </St.Text>
          </>
        ) : (
          <St.Text>The mint you are trying access is no longer active.</St.Text>
        )}
        <St.BackLink href="/">back</St.BackLink>
      </St.FallbackContainer>
    </>
  );
};

export default FallbackPage;
