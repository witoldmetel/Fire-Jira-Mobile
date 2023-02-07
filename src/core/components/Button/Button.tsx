import React from 'react';
import {GestureResponderEvent, Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {Text} from '../Text/Text';

type ButtonProps = {
  label: string;
  style?: StyleProp<ViewStyle>;

  onPress: (event: GestureResponderEvent) => void;
};

export function Button({label, style, onPress}: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text variant="subtitle1">{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 245,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
