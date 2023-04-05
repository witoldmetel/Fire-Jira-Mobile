import dimensions from 'utils/dimensions';

const FONT_PRIMARY = 'Roboto-Regular';

const fontSize = {
  font8: dimensions.screenWidth * (8 / 365),
  font12: dimensions.screenWidth * (12 / 365),
  font14: dimensions.screenWidth * (14 / 365),
  font16: dimensions.screenWidth * (16 / 365),
  font18: dimensions.screenWidth * (18 / 365),
  font20: dimensions.screenWidth * (20 / 365),
  font24: dimensions.screenWidth * (24 / 365),
  font32: dimensions.screenWidth * (32 / 365),
  font40: dimensions.screenWidth * (40 / 365),
};

const fontWeight = {
  full: '900',
  bold: '700',
  semi: '600',
  low: '400',
  normal: 'normal',
};

export const typography = {
  fontFamily: FONT_PRIMARY,
  ...fontSize,
  ...fontWeight,
  textVariants: {
    h1: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.font40,
    },
    h2: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.font32,
    },
    h3: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.font24,
    },
    h4: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.font20,
    },
    h5: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.font18,
    },
    h6: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.font16,
    },
    subtitle1: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.semi,
      fontSize: fontSize.font16,
    },
    subtitle2: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.semi,
      fontSize: fontSize.font14,
    },
    body1: {
      fontFamily: FONT_PRIMARY,
      fontSize: fontSize.font16,
    },
    body2: {
      fontFamily: FONT_PRIMARY,
      fontSize: fontSize.font14,
    },
    caption: {
      fontFamily: FONT_PRIMARY,
      fontSize: fontSize.font12,
    },
    overline: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.font12,
      letterSpacing: 1.1,
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: FONT_PRIMARY,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.font14,
      textTransform: 'capitalize',
    },
  },
} as const;
