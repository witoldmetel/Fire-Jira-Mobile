import {getCustomFontSize} from '@utils/typography';
import dimensions from '@utils/dimensions';

describe('getCustomFontSize', () => {
  it('should return a size that is relative to the screen width', () => {
    const customSize = 100;
    const expectedResult = dimensions.screenWidth * (customSize / 365);

    expect(getCustomFontSize(customSize)).toEqual(expectedResult);
  });
});
