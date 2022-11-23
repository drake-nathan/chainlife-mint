import React, { useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useWindowSize } from 'hooks/useWindowSize';
import { theme } from '../styles/theme';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { windowWidth } = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  return (
    <StyledThemeProvider theme={{ ...theme, isMobile }}>{children}</StyledThemeProvider>
  );
};

export default ThemeProvider;
