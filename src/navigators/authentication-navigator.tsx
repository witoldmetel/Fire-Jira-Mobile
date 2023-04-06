import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Onboarding} from '../authentication/onboarding/Onboarding';
import {Login} from '../authentication/login/Login';

export type AuthenticationNavigatorRoutes = {
  Onboarding: undefined;
  Login: undefined;
};

const AuthenticationStack = createStackNavigator<AuthenticationNavigatorRoutes>();

export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Login" component={Login} />
  </AuthenticationStack.Navigator>
);
