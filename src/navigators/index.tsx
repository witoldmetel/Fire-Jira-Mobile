import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  OnboardingScreen,
  AuthLoadingScreen,
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens';

export type MainNavigatorRoutes = {
  Onboarding: undefined;
  AuthLoading: undefined;
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

const MainStack = createStackNavigator<MainNavigatorRoutes>();

export const MainNavigator = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
    <MainStack.Screen name="Onboarding" component={OnboardingScreen} />
    <MainStack.Screen name="AuthLoading" component={AuthLoadingScreen} />
    <MainStack.Screen name="Welcome" component={WelcomeScreen} />
    <MainStack.Screen name="Login" component={LoginScreen} />
    <MainStack.Screen name="Register" component={RegisterScreen} />
  </MainStack.Navigator>
);
