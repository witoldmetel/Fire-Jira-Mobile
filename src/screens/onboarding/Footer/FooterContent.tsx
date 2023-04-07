import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Button, Text} from '../../../core/components';
import {theme} from '../../../core/theme';

import type {SlideType} from '../types';

type FooterContentProps = Pick<SlideType, 'subtitle' | 'description'> & {
  isLast: boolean;

  onPress: () => void;
};

export const FooterContent = ({subtitle, description, isLast, onPress}: FooterContentProps) => {
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
        style={[
          styles.button,
          {
            backgroundColor: isLast ? theme.palette.success.light : theme.palette.grey[300],
          },
        ]}
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
  button: {width: 245},
  subtitle: {
    marginBottom: 12,
  },
  description: {
    marginBottom: 24,
  },
});
