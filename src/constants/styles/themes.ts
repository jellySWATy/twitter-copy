import { Theme } from "@emotion/react";

export const primary = "#ffffff";
export const primaryDark = "#000000";
export const secondary = "#0f1419";
export const secondaryDark = "#e7e9ea";
export const tertiary = "#f7f9f9";
export const tertiaryDark = "#16181c";
export const text = "#536471";
export const action = "#1d9bf0";
export const danger = "#f4212e";

export const breakpoints = {
  desktopL: "@media (min-width: 1440px)",
  desktopM: "@media (min-width: 1280px)",
  desktopS: "@media (min-width: 1080px)",
  tabletL: "@media (min-width: 1024px)",
  tabletM: "@media (min-width: 620px)",
  tabletS: "@media (min-width: 500px)",
  mobile: "@media (min-width: 400px)",
};

export const lightTheme: Theme = {
  colors: {
    primary,
    secondary,
    tertiary,
    text,
    action,
    danger,
  },
  breakpoints,
};

export const darkTheme: Theme = {
  colors: {
    primary: primaryDark,
    secondary: secondaryDark,
    tertiary: tertiaryDark,
    text,
    action,
    danger,
  },
  breakpoints,
};
