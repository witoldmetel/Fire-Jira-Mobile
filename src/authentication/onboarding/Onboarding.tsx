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
import {Slide, SLIDE_HEIGHT} from './Slide';
import {theme} from '../../core/theme';
import {SlideFooter} from './SlideFooter';
import {Box} from '../../core/components';
import {Dot} from './Dot';

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

  const footerSectionAnimationStyle = useAnimatedStyle(() => ({
    transform: [{translateX: x.value * -1}],
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
      <View style={styles.footer}>
        <Animated.View style={[{...StyleSheet.absoluteFillObject}, slideAnimationStyle]} />
        <Box style={styles.pagination}>
          {SLIDES.map((_, index) => (
            <Dot key={index} index={index} x={x} screenWidth={dimensions.screenWidth} />
          ))}
        </Box>
        <Animated.View style={[styles.footerSection, footerSectionAnimationStyle]}>
          {SLIDES.map(({subtitle, description}, index) => (
            <SlideFooter
              key={subtitle}
              subtitle={subtitle}
              description={description}
              isLast={Boolean(SLIDES.length - 1 === index)}
              onPress={() => onPress(index)}
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
    flexDirection: 'row',
    width: dimensions.screenWidth * SLIDES.length,
    flex: 1,
    backgroundColor: theme.palette.common.white,
    borderTopLeftRadius: 75,
  },
});
