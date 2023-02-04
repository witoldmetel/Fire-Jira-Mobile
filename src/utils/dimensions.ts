import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const dimensions = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export default dimensions;
