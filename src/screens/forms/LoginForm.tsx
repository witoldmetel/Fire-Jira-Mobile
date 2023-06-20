import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {loginUser} from '../../api/auth-api';
import {Box, Button, Text, TextInput} from '../../core/components';
import {theme} from '../../core/theme';
import type {MainNavigatorRoutes} from '../../navigators';
import type {StackNavigationProps} from '../../navigators/types';
import {emailValidator, passwordValidator} from '../../utils/validations';

type Navigation = StackNavigationProps<MainNavigatorRoutes, 'Login'>;

const LoginForm = () => {
  const navigation = useNavigation<Navigation>();
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
    <Box>
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
    </Box>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  loginButton: {
    borderRadius: 8,
  },
  link: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textDecorationLine: 'underline',
  },
});

export default LoginForm;
