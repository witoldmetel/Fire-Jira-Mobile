import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding} from '../authentication/onboarding/Onboarding';
import {Welcome} from '../authentication/welcome/Welcome';

export type AuthenticationNavigatorRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
};

const AuthenticationStack = createStackNavigator<AuthenticationNavigatorRoutes>();

export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
  </AuthenticationStack.Navigator>
);
