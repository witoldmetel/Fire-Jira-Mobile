import React from 'react';
import {Text as RNText} from 'react-native';

import {useTheme} from '../../../hooks/useTheme';
import type {typography} from '../../theme/typography';

interface TextProps extends React.ComponentProps<typeof RNText> {
  variant?: keyof (typeof typography)['textVariants'];
}

export const Text = ({variant = 'body1', children, style, ...rest}: TextProps) => {
  const theme = useTheme();

  return (
    <RNText style={[theme.typography.textVariants[variant], style]} {...rest}>
      {children}
    </RNText>
  );
};
