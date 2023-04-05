import {Dimensions} from 'react-native';

import dimensions from 'src/utils/dimensions';

describe('Dimensions', () => {
  it('should get the window width and height', () => {
    const {width, height} = Dimensions.get('window');

    expect(width).toBeDefined();
    expect(height).toBeDefined();
  });

  it('should set the screenWidth and screenHeight correctly', () => {
    expect(dimensions.screenWidth).toBeLessThanOrEqual(dimensions.screenHeight);
  });
});
