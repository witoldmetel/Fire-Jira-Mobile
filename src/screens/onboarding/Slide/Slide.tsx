import React from 'react';
import {Animated, Image, StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Extrapolate, interpolate, SharedValue, useAnimatedStyle} from 'react-native-reanimated';

import {Box, Text} from '../../../core/components';
import {useTheme} from '../../../hooks/useTheme';
import dimensions from '../../../utils/dimensions';
import {BORDER_RADIUS, SLIDE_HEIGHT, SLIDE_WIDTH} from '../constants';
import type {SlideType} from '../types';

type SlideProps = Pick<SlideType, 'title' | 'titlePosition' | 'picture'> & {
  index: number;
  x: SharedValue<number>;
};

export const Slide = ({title, titlePosition, picture, index, x}: SlideProps) => {
  const theme = useTheme();

  const isTitlePositionRight = titlePosition === 'right' ? -1 : 1;

  // @todo: Opacity doesn't work here, need more investigation
  const imageAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        x.value,
        [
          (index - 1) * dimensions.screenWidth,
          index * dimensions.screenWidth,
          (index + 1) * dimensions.screenWidth,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Box style={styles.container}>
      <Animated.View style={[styles.pictureWrapper, imageAnimationStyle]}>
        <Image
          source={picture.src}
          style={[
            styles.picture,
            // Aspect Ratio
            {height: ((dimensions.screenWidth - BORDER_RADIUS) * picture.height) / picture.width},
          ]}
        />
      </Animated.View>
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
