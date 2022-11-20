import React from 'react';
import {ColorValue, Text as RNText} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';

import type {palette} from '../../theme/palette';
import type {typography} from '../../theme/typography';

type TextProps = {
  children: React.ReactNode;
  variant?: typeof typography['textVariants'];
  color?: typeof palette;
};

export const Text = ({variant, color, children, ...rest}: TextProps) => {
  const theme = useTheme();

  const textVariant = variant ? variant : theme.typography.textVariants.body1;

  return (
    <RNText
      style={{
        color: color
          ? (color as unknown as ColorValue)
          : (theme.palette.secondary.main as ColorValue),
        ...textVariant,
      }}
      {...rest}>
      {children}
    </RNText>
  );
};
