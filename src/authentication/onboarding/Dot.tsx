import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {theme} from '../../core/theme';

type DotProps = {
  index: number;

  // props needed to get current slide
  x: SharedValue<number>;
  screenWidth: number;
};

export function Dot({index, x, screenWidth}: DotProps) {
  const dotAnimationStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      x.value / screenWidth,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        scale: interpolate(
          x.value / screenWidth,
          [index - 1, index, index + 1],
          [1, 1.25, 1],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  return <Animated.View style={[styles.dot, dotAnimationStyle]} />;
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: theme.palette.chart.blue[2],
    borderRadius: 50,
    width: 10,
    height: 10,
    marginHorizontal: 3,
  },
});
