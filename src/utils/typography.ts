import dimensions from './dimensions';

/**
 * It takes a custom size (in pixels) and returns a size that is relative to the screen width
 * @param {number} customSize - The size of the font you want to use.
 */
export const getCustomFontSize = (customSize: number): number =>
  dimensions.screenWidth * (customSize / 365);
