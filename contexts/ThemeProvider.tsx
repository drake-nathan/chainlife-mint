import React, { useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "../styles/theme";
import { useWindowSize } from "hooks/useWindowSize";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { windowWidth } = useWindowSize();

  const [isMiniCard, setIsMiniCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowWidth < 650 && windowWidth > 390) setIsMiniCard(true);
    else setIsMiniCard(false);

    if (windowWidth < 800) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  return (
    <StyledThemeProvider theme={{ ...theme, isMiniCard, isMobile }}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
