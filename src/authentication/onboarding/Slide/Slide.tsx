import React from 'react';
import {Image, StyleProp, StyleSheet, TextStyle} from 'react-native';

import {Box, Text} from '../../../core/components';
import {useTheme} from '../../../hooks/useTheme';
import {getCustomFontSize} from '../../../utils/typography';
import {SLIDE_HEIGHT, SLIDE_WIDTH} from '../constants';

import type {SlideType} from '../types';

type SlideProps = Pick<SlideType, 'title' | 'titlePosition' | 'picture'>;

export const Slide = ({title, titlePosition, picture}: SlideProps) => {
  const theme = useTheme();

  const isTitlePositionRight = titlePosition === 'right' ? -1 : 1;

  return (
    <Box style={styles.container}>
      <Box style={styles.pictureWrapper}>
        <Image source={picture} style={styles.picture} />
      </Box>
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

const styles = StyleSheet.create({
  container: {
    width: SLIDE_WIDTH,
  },
  pictureWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
