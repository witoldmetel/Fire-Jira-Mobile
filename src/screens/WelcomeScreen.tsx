import React, {memo, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, {ClipPath, Ellipse, Image} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Box, Button, Logo, Text} from '../core/components';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';

const {width, height} = Dimensions.get('window');

const WelcomeScreen = () => {
  const imagePosition = useSharedValue(1);
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0]);

    return {
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

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);

    return {
      width: '100%',
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, {duration: 800}))
          : withTiming(0, {duration: 300}),
    };
  });

  const closeHandler = () => {
    imagePosition.value = 1;
  };

  const loginHandler = () => {
    imagePosition.value = 0;

    if (!isLoginPressed) {
      runOnJS(setIsLoginPressed)(true);
    }
  };

  const registerHandler = () => {
    imagePosition.value = 0;

    if (isLoginPressed) {
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
        <Svg height={height + 25} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 25} />
          </ClipPath>
          <Image
            href={require('../../assets/images/overlay.png')}
            height={height + 25}
            width={width + 25}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Pressable onPress={closeHandler}>
          <Animated.View style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
            <Icon name="close" size={18} />
          </Animated.View>
        </Pressable>
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
        <Animated.View style={[StyleSheet.absoluteFill, styles.formContainer, formAnimatedStyle]}>
          {isLoginPressed ? <LoginForm /> : <RegisterForm />}
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
    height: height / 2,
  },
  bottomSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 3,
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
  formContainer: {
    marginBottom: 70,
    zIndex: -1,
    justifyContent: 'center',
  },
});

export default memo(WelcomeScreen);
