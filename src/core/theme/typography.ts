const FONT_PRIMARY = 'Roboto-Regular';

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  textVariants: {
    h1: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 700,
      lineHeight: 80 / 64,
      fontSize: 40,
    },
    h2: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 700,
      lineHeight: 64 / 48,
      fontSize: 32,
    },
    h3: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: 24,
    },
    h4: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: 20,
    },
    h5: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: 18,
    },
    h6: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 700,
      lineHeight: 28 / 18,
      fontSize: 17,
    },
    subtitle1: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: 14,
    },
    body1: {
      fontFamily: FONT_PRIMARY,
      lineHeight: 1.5,
      fontSize: 16,
    },
    body2: {
      fontFamily: FONT_PRIMARY,
      lineHeight: 22 / 14,
      fontSize: 14,
    },
    caption: {
      fontFamily: FONT_PRIMARY,
      lineHeight: 1.5,
      fontSize: 12,
    },
    overline: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: 12,
      letterSpacing: 1.1,
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: FONT_PRIMARY,
      fontWeight: 700,
      lineHeight: 24 / 14,
      fontSize: 14,
      textTransform: 'capitalize',
    },
  },
} as const;
