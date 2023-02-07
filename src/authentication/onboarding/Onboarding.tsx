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
import {SlideFooter} from './SlideFooter';

export const Onboarding = () => {
  const x = useSharedValue(0);

  const slideAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      x.value,
      SLIDES.map((_, index) => dimensions.screenWidth * index),
      SLIDES.map((slide) => slide.backgroundColor!),
    ),
  }));

  const footerSectionAnimationStyle = useAnimatedStyle(() => ({
    transform: [{translateX: x.value * -1}],
  }));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      x.value = e.contentOffset.x;
    },
  });

  console.log(x.value);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slideAnimationStyle]}>
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
        <Animated.View style={[{...StyleSheet.absoluteFillObject}, slideAnimationStyle]} />
        <Animated.View style={[styles.footerSection, footerSectionAnimationStyle]}>
          {SLIDES.map(({subtitle, description}, index) => (
            <SlideFooter
              key={subtitle}
              subtitle={subtitle}
              description={description}
              x={x}
              isLast={Boolean(SLIDES.length - 1 === index)}
            />
          ))}
        </Animated.View>
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
  footerSection: {
    flexDirection: 'row',
    width: dimensions.screenWidth * SLIDES.length,
    flex: 1,
    backgroundColor: theme.palette.common.white,
    borderTopLeftRadius: 75,
  },
});
