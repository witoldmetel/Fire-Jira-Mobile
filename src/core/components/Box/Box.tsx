import React from 'react';
import {Dimensions, View} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';
import {getResponsiveValue} from '../../../utils/getResponsiveValue';

import type {palette} from '../../theme/palette';
import type {spacing} from '../../theme/spacing';

interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof typeof spacing;
  margin?: keyof typeof spacing;
  backgroundColor?: keyof typeof palette;
}

export const Box = ({padding, margin, backgroundColor, children, ...rest}: BoxProps) => {
  const theme = useTheme();
  const dimensions = Dimensions.get('window');

  return (
    <View
      style={{
        margin: getResponsiveValue({
          value: margin ? theme.spacing[margin] : theme.spacing.m,
          dimensions,
          theme,
        }),
        padding: getResponsiveValue({
          value: padding ? theme.spacing[padding] : theme.spacing.m,
          dimensions,
          theme,
        }),
        backgroundColor: backgroundColor
          ? theme.palette[backgroundColor]
          : theme.palette.primary.main,
      }}
      {...rest}>
      {children}
    </View>
  );
};
