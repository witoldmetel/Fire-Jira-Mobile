import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';

type BoxProps = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export const Box = ({style, children, ...rest}: BoxProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          margin: theme.spacing.m,
          padding: theme.spacing.l,
          backgroundColor: theme.palette.background.paper,
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
};
