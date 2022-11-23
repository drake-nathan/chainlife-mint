import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    isMobile?: boolean;
    colors: {
      bgMain: string;
      textMain: string;
      textOffset: string;
      hover: string;
    };
  }
}
