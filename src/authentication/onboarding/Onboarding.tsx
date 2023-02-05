import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import dimensions from '../../utils/dimensions';
import {Slide, SLIDE_HEIGHT} from './Slide';

export const Onboarding = () => {
  const x = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      x.value,
      [0, dimensions.screenWidth, dimensions.screenWidth * 2, dimensions.screenWidth * 3],
      ['red', 'blue', 'green', 'pink'],
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
          <Slide label="Relaxed" />
          <Slide label="PlayFul" labelPostion="right" />
          <Slide label="Excentric" />
          <Slide label="WoW" labelPostion="right" />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[{...StyleSheet.absoluteFillObject}, animationStyle]} />
        <View style={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});
