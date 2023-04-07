import React, {memo, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Layout} from '../core/components';

import type {StackNavigationProps} from '../navigators/types';
import type {MainNavigatorRoutes} from '../navigators';

type Props = {
  navigation: StackNavigationProps<MainNavigatorRoutes, 'Onboarding'>;
};

const AuthLoadingScreen = ({navigation}: Props) => {
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);

    if (user) {
      // User is logged in
      navigation.navigate('Dashboard');
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
      {/* @todo: use colors from theme */}
      <ActivityIndicator size="large" color={'red'} />
    </Layout>
  );
};

export default memo(AuthLoadingScreen);
