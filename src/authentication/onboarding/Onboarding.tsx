import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import dimensions from '../../utils/dimensions';
import {SLIDES} from './constants';
import {Slide, SLIDE_HEIGHT} from './Slide';
import {theme} from '../../core/theme';

export const Onboarding = () => {
  const x = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      x.value,
      SLIDES.map((_, index) => dimensions.screenWidth * index),
      SLIDES.map((slide) => slide.backgroundColor!),
    ),
  }));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      x.value = e.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, animationStyle]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={dimensions.screenWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          onScroll={scrollHandler}>
          {SLIDES.map(({title, titlePosition}) => (
            <Slide key={title} title={title} titlePosition={titlePosition} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[{...StyleSheet.absoluteFillObject}, animationStyle]} />
        <View style={styles.footerSection} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.common.white,
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerSection: {flex: 1, backgroundColor: theme.palette.common.white, borderTopLeftRadius: 75},
});
