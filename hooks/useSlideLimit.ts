import { useState, useEffect } from 'react';
import { useWindowSize } from './useWindowSize';

export const useCardLimit = () => {
  const { windowWidth } = useWindowSize();

  const [limit, setLimit] = useState(16);

  useEffect(() => {
    // set 3 rows of cards based on window width
    if (windowWidth > 2210) setLimit(21);
    else if (windowWidth > 1895) setLimit(18);
    else if (windowWidth > 1578) setLimit(15);
    else if (windowWidth > 1263) setLimit(12);
    else if (windowWidth > 947) setLimit(9);
    // this is where the mini card breakpoint starts
    else if (windowWidth > 650) setLimit(6);
    else if (windowWidth > 557) setLimit(9);
    else if (windowWidth > 390) setLimit(6);
    // switches back to large cards
    else setLimit(4);
  }, [windowWidth]);

  return { limit };
};
