import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {signInUser} from '../../api/auth-api';
import {Box, Button, TextInput} from '../../core/components';
import type {MainNavigatorRoutes} from '../../navigators';
import type {StackNavigationProps} from '../../navigators/types';
import {emailValidator, passwordValidator} from '../../utils/validations';

type Navigation = StackNavigationProps<MainNavigatorRoutes, 'Register'>;

const RegisterForm = () => {
  const navigation = useNavigation<Navigation>();

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
      <Button
        label="Register"
        onPress={onRegisterPress}
        style={styles.registerButton}
        disabled={!(email.value && password.value)}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    borderRadius: 8,
  },
});

export default RegisterForm;
