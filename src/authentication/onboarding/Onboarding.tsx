import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import dimensions from '../../utils/dimensions';
import {Slide, SLIDE_HEIGHT} from './Slide';

export const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={dimensions.screenWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <Slide label="Relaxed" />
          <Slide label="PlayFul" labelPostion="right" />
          <Slide label="Excentric" />
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'cyan'}} />
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
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});
