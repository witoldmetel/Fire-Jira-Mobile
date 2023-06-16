import React, {memo} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {theme} from '../../theme';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.palette.common.white,
  },
  container: {
    flex: 1,
    width: '100%',
  },
});

export default memo(Layout);
