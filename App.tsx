import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from './src/contexts/ThemeContext';
import {Onboarding} from './src/authentication/onboarding/Onboarding';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
