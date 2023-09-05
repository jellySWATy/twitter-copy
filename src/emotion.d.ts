import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      action: string;
      danger: string;
    };
    breakpoints: {
      desktopL: string;
      desktopM: string;
      desktopS: string;
      tabletL: string;
      tabletM: string;
      tabletS: string;
      mobile: string;
    };
  }
}
