import React from 'react';
import {ColorValue, Text as RNText, StyleProp, TextStyle} from 'react-native';

import {useTheme} from '../../../hooks/useTheme';
import type {palette} from '../../theme/palette';
import type {typography} from '../../theme/typography';

interface TextProps extends React.ComponentProps<typeof RNText> {
  variant?: keyof (typeof typography)['textVariants'];
  color?: keyof typeof palette;
}

export const Text = ({variant = 'body1', color, children, style, ...rest}: TextProps) => {
  const theme = useTheme();

  return (
    <RNText
      style={[
        {
          color: color
            ? (theme.palette[color] as ColorValue)
            : (theme.palette.text.primary as ColorValue),
          ...theme.typography.textVariants[variant],
        } as StyleProp<TextStyle>,
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};
