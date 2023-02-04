import React from 'react';
import type {StyleProp, TextStyle} from 'react-native';

import {Box, Text} from '../../core/components';
import {useTheme} from '../../hooks/useTheme';
import dimensions from '../../utils/dimensions';
import {getCustomFontSize} from '../../utils/typography';

type SlideProps = {
  label: string;
  labelPostion?: 'left' | 'right';
};

export const SLIDE_HEIGHT = 0.6 * dimensions.screenHeight;
export const SLIDE_WIDTH = dimensions.screenWidth;

export const Slide = ({label, labelPostion}: SlideProps) => {
  const theme = useTheme();

  const isLabelRight = labelPostion === 'right' ? -1 : 1;

  return (
    <Box style={{width: SLIDE_WIDTH}}>
      <Box
        style={{
          transform: [
            {rotate: labelPostion === 'right' ? '-90deg' : '90deg'},
            {translateX: (isLabelRight * (SLIDE_HEIGHT - 100)) / 2},
            {translateY: SLIDE_WIDTH / 2 - 50},
          ],
        }}>
        <Text
          style={
            {
              ...theme.typography.textVariants.h1,
              fontSize: getCustomFontSize(80),
              color: theme.palette.common.white,
              textAlign: 'center',
            } as StyleProp<TextStyle>
          }>
          {label}
        </Text>
      </Box>
    </Box>
  );
};
