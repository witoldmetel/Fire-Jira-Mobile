import React, {memo} from 'react';

import {Text, Button, Layout, Logo} from '../core/components';

import type {StackNavigationProps} from '../navigators/types';
import type {MainNavigatorRoutes} from '../navigators';

type Props = {
  navigation: StackNavigationProps<MainNavigatorRoutes, 'Onboarding'>;
};

const WelcomeScreen = ({navigation}: Props) => {
  return (
    <Layout>
      <Logo />
      <Text variant="h2">Fire Jira</Text>
      <Button label="Login" onPress={() => navigation.navigate('Login')} />
      <Button label="Sign Up" onPress={() => navigation.navigate('Register')} />
    </Layout>
  );
};

export default memo(WelcomeScreen);
