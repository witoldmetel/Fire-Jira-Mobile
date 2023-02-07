import React from 'react';

import {Box, Text} from '../../core/components';

import type {SharedValue} from 'react-native-reanimated';

import type {SlideType} from './types';
import {StyleSheet} from 'react-native';

type SlideFooterProps = Pick<SlideType, 'subtitle' | 'description'> & {
  x: SharedValue<number>;
  isLast: boolean;
};

export const SlideFooter = ({subtitle, description}: SlideFooterProps) => {
  return (
    <Box style={styles.container}>
      <Text variant="h4" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body1">{description}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    marginBottom: 12,
  },
});
