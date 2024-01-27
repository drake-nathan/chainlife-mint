import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      bgMain: string;
      hover: string;
      textMain: string;
      textOffset: string;
    };
    isMiniCard?: boolean;
    isMobile?: boolean;
  }
}
