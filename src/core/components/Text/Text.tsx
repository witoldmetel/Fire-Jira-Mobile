import React from 'react';
import {Text as RNText} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';

import type {palette} from '../../theme/palette';
import type {typography} from '../../theme/typography';

interface TextProps extends React.ComponentProps<typeof RNText> {
  variant?: keyof typeof typography['textVariants'];
  color?: keyof typeof palette;
}

export const Text = ({variant = 'body1', color, children, ...rest}: TextProps) => {
  const theme = useTheme();

  console.log(theme.typography.textVariants[variant]);

  return (
    <RNText
      style={{
        color: color ? theme.palette[color] : theme.palette.secondary.main,
        ...theme.typography.textVariants[variant],
      }}
      {...rest}>
      {children}
    </RNText>
  );
};
