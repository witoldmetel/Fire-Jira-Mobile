import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Button, Text} from '../../core/components';
import {theme} from '../../core/theme';

import type {SlideType} from './types';

type SlideFooterProps = Pick<SlideType, 'subtitle' | 'description'> & {
  isLast: boolean;

  onPress: () => void;
};

export const SlideFooter = ({subtitle, description, isLast, onPress}: SlideFooterProps) => {
  return (
    <Box style={styles.container}>
      <Text variant="h4" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body1" style={styles.description}>
        {description}
      </Text>
      <Button
        label={isLast ? "Let's Started" : 'Next'}
        style={{backgroundColor: isLast ? theme.palette.success.light : theme.palette.grey[300]}}
        onPress={onPress}
      />
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
  description: {
    marginBottom: 24,
  },
});
