import React, {memo, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Box, Layout} from '../core/components';
import {theme} from '../core/theme';

import type {StackNavigationProps} from '../navigators/types';
import type {MainNavigatorRoutes} from '../navigators';

type Props = {
  // @todo: Refactor navigators
  navigation: StackNavigationProps<MainNavigatorRoutes, 'AuthLoading'>;
};

const AuthLoadingScreen = ({navigation}: Props) => {
  // @todo: Move to context
  const [user, setUser] = useState();

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
