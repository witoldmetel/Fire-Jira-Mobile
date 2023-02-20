import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from './src/contexts/ThemeContext';
import {AuthenticationNavigator} from './src/navigators/authentication-navigator';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
