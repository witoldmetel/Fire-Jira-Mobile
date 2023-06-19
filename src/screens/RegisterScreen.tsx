import React, {memo, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {signInUser} from '../api/auth-api';
import {BackButton, Box, Button, Layout, Text, TextInput} from '../core/components';
import {theme} from '../core/theme';
import type {MainNavigatorRoutes} from '../navigators';
import type {StackNavigationProps} from '../navigators/types';
import {emailValidator, passwordValidator} from '../utils/validations';

type RegisterScreenProps = {
  // @todo: Refactor navigators
  navigation: StackNavigationProps<MainNavigatorRoutes, 'Register'>;
};

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);
  const [_, setError] = useState('');

  const onRegisterPress = async () => {
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

    const response = await signInUser({
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
      <BackButton />
      <Box style={styles.container} padding="l">
        <Text variant="h3">Get started absolutely free.</Text>
        <Text variant="subtitle2" style={styles.subtitle}>
          Free forever. No credit card needed.
        </Text>
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
        <Button
          label="Register"
          onPress={onRegisterPress}
          style={styles.registerButton}
          disabled={!(email.value && password.value)}
        />
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
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
  registerButton: {
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

export default memo(RegisterScreen);
