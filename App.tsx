import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from './src/contexts/ThemeContext';
import {MainNavigator} from './src/navigators';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
