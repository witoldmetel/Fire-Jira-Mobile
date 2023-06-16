import React, {memo, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Box, Layout} from '../core/components';
import {theme} from '../core/theme';
import type {MainNavigatorRoutes} from '../navigators';
import type {StackNavigationProps} from '../navigators/types';

type AuthLoadingScreenProps = {
  // @todo: Refactor navigators
  navigation: StackNavigationProps<MainNavigatorRoutes, 'AuthLoading'>;
};

const AuthLoadingScreen = ({navigation}: AuthLoadingScreenProps) => {
  // @todo: Move to context
  const [user, setUser] = useState();
  console.log('file: AuthLoadingScreen.tsx:18 ~ AuthLoadingScreen ~ user:', user);

  // @todo: Handle onboarding screen
  function onAuthStateChanged(user) {
    setUser(user);

    if (user) {
      // User is logged in
      navigation.navigate('Home');
    } else {
      // User is not logged in
      navigation.navigate('Welcome');
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Box style={styles.container}>
        <ActivityIndicator size="large" color={theme.palette.primary.main} />
      </Box>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default memo(AuthLoadingScreen);
