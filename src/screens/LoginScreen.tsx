import React, {memo, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {loginUser} from '../api/auth-api';
import {BackButton, Box, Button, Layout, Text, TextInput} from '../core/components';
import {theme} from '../core/theme';
import type {MainNavigatorRoutes} from '../navigators';
import type {StackNavigationProps} from '../navigators/types';
import {emailValidator, passwordValidator} from '../utils/validations';

type LoginScreenProps = {
  // @todo: Refactor navigators
  navigation: StackNavigationProps<MainNavigatorRoutes, 'Login'>;
};

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);
  const [_, setError] = useState('');

  const onLoginPress = async () => {
    if (loading) {
      return;
    }

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    setLoading(true);

    const response = await loginUser({
      email: email.value,
      password: password.value,
    });

    if (!response?.error) {
      navigation.navigate('Home');
    } else {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <BackButton onPress={() => navigation.navigate('Welcome')} />
      <Box style={styles.container} padding="l">
        <Text variant="h2">Sign in to Fire Jira</Text>
        <Text variant="subtitle2" style={styles.subtitle}>
          Enter your details below.
        </Text>
        <Box style={styles.demoContainer}>
          <Text variant="subtitle1">
            Demo <Text variant="subtitle2">email:</Text> joedoe@firejira.com
            <Text variant="subtitle2"> / password:</Text> firejira
          </Text>
        </Box>
        <TextInput
          placeholder="Email address"
          value={email.value}
          onChangeText={(text) => setEmail({value: text, error: ''})}
          errorText={email.error}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password.value}
          onChangeText={(text) => setPassword({value: text, error: ''})}
          errorText={password.error}
          secureTextEntry
          autoCapitalize="none"
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button label="Login" onPress={onLoginPress} style={styles.loginButton} />
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Get started</Text>
          </TouchableOpacity>
        </View>
      </Box>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  subtitle: {
    marginVertical: 12,
  },
  demoContainer: {
    backgroundColor: '#F1F9FF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    width: '100%',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  loginButton: {
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    marginTop: 14,
  },
  link: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textDecorationLine: 'underline',
  },
});

export default memo(LoginScreen);
