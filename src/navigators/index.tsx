import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AuthLoadingScreen,
  ForgotPasswordScreen,
  HomeScreen,
  OnboardingScreen,
  WelcomeScreen,
} from '../screens';

export type MainNavigatorRoutes = {
  Onboarding: undefined;
  AuthLoading: undefined;
  Welcome: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Register: undefined;
  Home: undefined;
};

const MainStack = createStackNavigator<MainNavigatorRoutes>();

export const MainNavigator = () => (
  // @todo: Initial screen should be AuthLoading
  <MainStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Onboarding">
    <MainStack.Screen name="Onboarding" component={OnboardingScreen} />
    <MainStack.Screen name="AuthLoading" component={AuthLoadingScreen} />
    <MainStack.Screen name="Welcome" component={WelcomeScreen} />
    <MainStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <MainStack.Screen name="Home" component={HomeScreen} />
  </MainStack.Navigator>
);
