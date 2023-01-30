import React from 'react';
import {ColorValue, View} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';

import type {palette} from '../../theme/palette';
import type {spacing} from '../../theme/spacing';

interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof typeof spacing;
  margin?: keyof typeof spacing;
  backgroundColor?: keyof typeof palette;
}

export const Box = ({padding, margin, backgroundColor, children, ...rest}: BoxProps) => {
  const theme = useTheme();

  return (
    <View
      style={{
        margin: margin ? theme.spacing[margin] : theme.spacing.m,
        padding: padding ? theme.spacing[padding] : theme.spacing.m,
        backgroundColor: backgroundColor
          ? (theme.palette[backgroundColor] as ColorValue)
          : (theme.palette.primary.main as ColorValue),
      }}
      {...rest}>
      {children}
    </View>
  );
};
