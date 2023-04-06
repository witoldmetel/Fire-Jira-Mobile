import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Box, Text} from '../../core/components';

import {theme} from '../../core/theme';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Box style={{flex: 1}}>
        <Box style={{flex: 1}}>
          <Text>Welcome</Text>
        </Box>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.common.white,
  },
});
