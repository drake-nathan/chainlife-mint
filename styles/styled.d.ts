import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    isMobile?: boolean;
    isMiniCard?: boolean;
    colors: {
      bgMain: string;
      textMain: string;
      textOffset: string;
      hover: string;
    };
  }
}
