import React, {memo} from 'react';
import {StyleSheet} from 'react-native';

import {Box, Button, Layout, Logo, Text} from '../core/components';
import type {MainNavigatorRoutes} from '../navigators';
import type {StackNavigationProps} from '../navigators/types';

type WelcomeScreenProps = {
  navigation: StackNavigationProps<MainNavigatorRoutes, 'Welcome'>;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  return (
    <Layout>
      <Box style={styles.container} padding="l">
        <Logo />
        <Text variant="h2">Fire Jira</Text>
        <Text variant="subtitle1" style={styles.subtitle}>
          Make Your Own Workflow! Track and manage projects in real time.
        </Text>
        <Button
          label="Login"
          labelStyle={styles.buttonText}
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          label="Sign Up"
          variant="outlined"
          labelStyle={styles.buttonText}
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        />
      </Box>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  subtitle: {marginVertical: 10, textAlign: 'center'},
  button: {borderRadius: 8, marginVertical: 10},
  buttonText: {textTransform: 'uppercase'},
});

export default memo(WelcomeScreen);
