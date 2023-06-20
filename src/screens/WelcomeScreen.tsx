import React, {memo, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, {ClipPath, Ellipse, Image} from 'react-native-svg';

import {Box, Button, Logo, Text} from '../core/components';
import type {MainNavigatorRoutes} from '../navigators';
import type {StackNavigationProps} from '../navigators/types';

type WelcomeScreenProps = {
  navigation: StackNavigationProps<MainNavigatorRoutes, 'Welcome'>;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const {height, width} = Dimensions.get('window');
  const imagePosition = useSharedValue(1);
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0]);

    return {
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);

    return {
      width: '100%',
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
      transform: [{rotate: withTiming(interpolation + 'deg', {duration: 1000})}],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;

    if (isLoginPressed) {
      runOnJS(setIsLoginPressed)(true);
    }
  };

  const registerHandler = () => {
    imagePosition.value = 0;

    if (!isLoginPressed) {
      runOnJS(setIsLoginPressed)(false);
    }
  };

  return (
    <Box style={styles.container} padding="l">
      <View style={[StyleSheet.absoluteFill, styles.topSection]}>
        <Logo />
        <Text variant="h2" style={styles.textStyle}>
          Fire Jira
        </Text>
        <Text variant="subtitle1" style={styles.subtitle}>
          Make Your Own Workflow!
        </Text>
        <Text variant="subtitle1" style={styles.subtitle}>
          Track and manage projects in real time.
        </Text>
      </View>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 50} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 50} />
          </ClipPath>
          <Image
            href={require('../../assets/images/overlay.png')}
            height={height + 50}
            width={width + 50}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomSection}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Button
            label="Login"
            labelStyle={styles.buttonText}
            style={styles.button}
            onPress={loginHandler}
          />
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Button
            label="Sign Up"
            variant="outlined"
            labelStyle={styles.buttonText}
            style={styles.button}
            onPress={registerHandler}
          />
        </Animated.View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    height: '50%',
  },
  bottomSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
  },
  subtitle: {marginVertical: 10, textAlign: 'center', color: '#fff'},
  button: {borderRadius: 8, marginVertical: 10},
  buttonText: {textTransform: 'uppercase'},
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6.25,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    top: -20,
  },
});

export default memo(WelcomeScreen);
