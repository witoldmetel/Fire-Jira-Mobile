import React from 'react';
import {Dimensions} from 'react-native';

import {Box, Text} from '../../core/components';

const {width} = Dimensions.get('window');

export const Slide = () => {
  return (
    <Box style={{width}}>
      <Text variant="h1">Slide</Text>
    </Box>
  );
};
