import React from 'react';

import {Box, Text} from '../../core/components';
import dimensions from '../../utils/dimensions';

import type {SharedValue} from 'react-native-reanimated';

import type {SlideType} from './types';

type SlideFooterProps = Pick<SlideType, 'subtitle' | 'description'> & {
  x: SharedValue<number>;
  isLast: boolean;
};

export const SLIDE_HEIGHT = 0.65 * dimensions.screenHeight;
export const SLIDE_WIDTH = dimensions.screenWidth;

export const SlideFooter = ({subtitle, description}: SlideFooterProps) => {
  return (
    <Box style={{width: SLIDE_WIDTH}}>
      <Text>{subtitle}</Text>
      <Text>{description}</Text>
    </Box>
  );
};
