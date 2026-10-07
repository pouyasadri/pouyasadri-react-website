/**
 * Port of legacy `chosenTheme = blackTheme` from CRA `src/theme.js`.
 */
export const theme = {
  body: "#E5E5E5",
  text: "#14213d",
  highlight: "#ffffff",
  dark: "#000000",
  secondaryText: "#5A6377",
  imageHighlight: "#fca311",
  compImgHighlight: "#E6E6E6",
  jacketColor: "#8d99ae",
  headerColor: "#fca31177",
} as const;

export type SiteTheme = typeof theme;
