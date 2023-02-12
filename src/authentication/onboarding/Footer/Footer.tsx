import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

import dimensions from '../../../utils/dimensions';
import {theme} from '../../../core/theme';
import {Box} from '../../../core/components';
import {SLIDES} from '../constants';
import {FooterContent} from './FooterContent';
import {Dot} from './Dot';

type FooterProps = {
  x: SharedValue<number>;

  onPress: (index: number) => void;
};

export function Footer({x, onPress}: FooterProps) {
  const footerContentAnimationStyle = useAnimatedStyle(() => ({
    flex: 1,
    flexDirection: 'row',
    width: dimensions.screenWidth * SLIDES.length,
    transform: [{translateX: x.value * -1}],
  }));

  return (
    <View style={styles.footer}>
      <View style={styles.footerSection}>
        <Box style={styles.pagination}>
          {SLIDES.map((_, index) => (
            <Dot key={index} index={index} x={x} />
          ))}
        </Box>
        <Animated.View style={footerContentAnimationStyle}>
          {SLIDES.map(({subtitle, description}, index) => (
            <FooterContent
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
}

const styles = StyleSheet.create({
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
