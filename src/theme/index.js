const palette = {
  palette01: '#000000',
  palette02: 'rgba(255,255,255,1)',
};
export const colors = {
  paragraphText: palette.palette01,
  buttonPrimaryBg: palette.palette02,
  headingText: palette.palette01,
};
export const themedColors = {
  default: {
    ...colors,
  },
  light: {
    ...colors,
  },
  dark: {
    ...colors,
    buttonPrimaryBg: palette.palette01,
    paragraphText: palette.palette02,
  },
};
