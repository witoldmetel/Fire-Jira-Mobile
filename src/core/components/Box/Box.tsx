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

export const Box = ({padding, margin, backgroundColor, children, style, ...rest}: BoxProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          margin: (margin && theme.spacing[margin]) || 0,
          padding: (padding && theme.spacing[padding]) || 0,
          backgroundColor: backgroundColor
            ? (theme.palette[backgroundColor] as ColorValue)
            : ('transparent' as ColorValue),
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
};
