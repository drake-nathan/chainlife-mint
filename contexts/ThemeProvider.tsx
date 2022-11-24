import React, { useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useWindowSize } from 'hooks/useWindowSize';
import { theme } from '../styles/theme';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { windowWidth } = useWindowSize();

  const [isMiniCard, setIsMiniCard] = useState(false);

  useEffect(() => {
    if (windowWidth < 650 && windowWidth > 390) setIsMiniCard(true);
    else setIsMiniCard(false);
  }, [windowWidth]);

  return (
    <StyledThemeProvider theme={{ ...theme, isMiniCard }}>{children}</StyledThemeProvider>
  );
};

export default ThemeProvider;
