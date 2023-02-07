import React from 'react';
import type {StyleProp, TextStyle} from 'react-native';

import {Box, Text} from '../../core/components';
import {useTheme} from '../../hooks/useTheme';
import dimensions from '../../utils/dimensions';
import {getCustomFontSize} from '../../utils/typography';

import type {SlideType} from './types';

type SlideProps = Pick<SlideType, 'title' | 'titlePosition'>;

export const SLIDE_HEIGHT = 0.65 * dimensions.screenHeight;
export const SLIDE_WIDTH = dimensions.screenWidth;

export const Slide = ({title, titlePosition}: SlideProps) => {
  const theme = useTheme();

  const isTitlePositionRight = titlePosition === 'right' ? -1 : 1;

  return (
    <Box style={{width: SLIDE_WIDTH}}>
      <Box
        style={{
          transform: [
            {rotate: titlePosition === 'right' ? '-90deg' : '90deg'},
            {translateX: (isTitlePositionRight * (SLIDE_HEIGHT - 100)) / 2},
            {translateY: SLIDE_WIDTH / 2 - 50},
          ],
        }}>
        <Text
          style={
            {
              ...theme.typography.textVariants.h1,
              fontSize: getCustomFontSize(75),
              color: theme.palette.common.white,
              textAlign: 'center',
            } as StyleProp<TextStyle>
          }>
          {title}
        </Text>
      </Box>
    </Box>
  );
};
