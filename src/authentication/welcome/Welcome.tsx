import React from 'react';
import {StyleSheet, View} from 'react-native';

import {theme} from '../../core/theme';

export const Welcome = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.common.white,
  },
});
