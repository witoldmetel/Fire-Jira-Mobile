import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {Text} from '../Text/Text';
import {theme} from '../../theme';

type ButtonProps = {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  variant?: 'outlined' | 'contained';
  disabled?: boolean;

  onPress: (event: GestureResponderEvent) => void;
};

export function Button({
  label,
  labelStyle,
  style,
  onPress,
  variant = 'contained',
  disabled,
  children,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        styles.button,
        variant === 'contained' && {
          backgroundColor: disabled ? theme.palette.action.disabled : theme.palette.primary.main,
          opacity: disabled ? 0.45 : 1,
        },
        variant === 'outlined' && {
          borderColor: theme.palette.grey[600],
          borderWidth: 1,
          backgroundColor: disabled ? theme.palette.action.disabled : theme.palette.common.white,
          opacity: disabled ? 0.45 : 1,
        },
        {opacity: pressed ? 0.75 : 1},
        style,
      ]}>
      {children ?? (
        <Text variant="subtitle1" style={labelStyle}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {textTransform: 'uppercase'},
});
