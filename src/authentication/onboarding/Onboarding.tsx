import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import dimensions from '../../utils/dimensions';
import {SLIDES} from './constants';
import {Slide, SLIDE_HEIGHT} from './Slide/Slide';
import {theme} from '../../core/theme';
import {Footer} from './Footer/Footer';

export const Onboarding = () => {
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);

  const slideAnimationStyle = useAnimatedStyle(() => ({
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

  const onPress = (index: number) => {
    if (scrollViewRef.current) {
      index += 1;
      scrollViewRef.current.scrollTo({x: dimensions.screenWidth * index, animated: true});
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slideAnimationStyle]}>
        <Animated.ScrollView
          ref={scrollViewRef}
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
      <Animated.View style={[{...StyleSheet.absoluteFillObject}, slideAnimationStyle]} />
      <Footer x={x} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.common.white,
  },
  slider: {
    zIndex: 1,
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
    position: 'relative',
  },
  pagination: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerSection: {
    flex: 1,
    backgroundColor: theme.palette.common.white,
    borderTopLeftRadius: 75,
  },
});
