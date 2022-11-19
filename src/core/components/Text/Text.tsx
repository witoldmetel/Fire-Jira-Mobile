import React from 'react';
import {StyleProp, Text as RNText, TextStyle} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';

type TextProps = {
  children: string;

  style?: StyleProp<TextStyle>;
};

export const Text = ({style, children, ...rest}: TextProps) => {
  const theme = useTheme();

  return (
    <RNText
      style={[
        {
          color: theme.palette.primary.main,
          fontFamily: theme.typography.fontFamily,
          ...theme.typography.body1,
        },
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};
