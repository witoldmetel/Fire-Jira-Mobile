import dimensions from './dimensions';

export const getCustomFontSize = (customSize: number): number =>
  dimensions.screenWidth * (customSize / 365);
