import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

import {Layout, Button, Logo, Text, TextInput, Box} from '../core/components';
import {emailValidator, passwordValidator} from '../utils/validations';
import {theme} from '../core/theme';

type Props = {
  navigation: any;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const _onLoginPressed = async () => {
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

    if (response.error) {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <Button label="Go back" onPress={() => navigation.navigate('Welcome')} />
      <Logo />
      <Text variant="h2">Welcome back</Text>
      <Box style={{backgroundColor: '#F1F9FF', padding: 10, borderRadius: 8}}>
        <Text variant="subtitle1" style={{textAlign: 'center'}}>
          Demo email : joedoe@firejira.com / password : firejira
        </Text>
      </Box>
      <TextInput
        placeholder="Email"
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
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button label="Login" onPress={_onLoginPressed} />
      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.palette.grey[700],
  },
  link: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
});

export default memo(LoginScreen);
