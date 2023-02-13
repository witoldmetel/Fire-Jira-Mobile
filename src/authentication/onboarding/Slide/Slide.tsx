import React from 'react';
import {Image, StyleProp, StyleSheet, TextStyle} from 'react-native';

import {Box, Text} from '../../../core/components';
import {useTheme} from '../../../hooks/useTheme';
import dimensions from '../../../utils/dimensions';
import {getCustomFontSize} from '../../../utils/typography';
import {BORDER_RADIUS, SLIDE_HEIGHT, SLIDE_WIDTH} from '../constants';

import type {SlideType} from '../types';

type SlideProps = Pick<SlideType, 'title' | 'titlePosition' | 'picture'>;

export const Slide = ({title, titlePosition, picture}: SlideProps) => {
  const theme = useTheme();

  const isTitlePositionRight = titlePosition === 'right' ? -1 : 1;

  return (
    <Box style={styles.container}>
      <Box style={styles.pictureWrapper}>
        <Image
          source={picture.src}
          style={[
            styles.picture,
            // Aspect Ratio
            {height: ((dimensions.screenWidth - BORDER_RADIUS) * picture.height) / picture.width},
          ]}
        />
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
              textShadowColor: '#585858',
              textShadowOffset: {width: 5, height: 5},
              textShadowRadius: 10,
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  picture: {
    width: dimensions.screenWidth,
  },
});
