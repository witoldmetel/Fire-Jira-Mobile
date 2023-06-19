import React, {memo, useState} from 'react';
import {StyleSheet} from 'react-native';

import {sendEmailWithPassword} from '../api/auth-api';
import {BackButton, Box, Button, Layout, Text, TextInput} from '../core/components';
import {emailValidator} from '../utils/validations';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);

  const onSendPress = async () => {
    if (loading) {
      return;
    }

    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    setLoading(true);

    const response = await sendEmailWithPassword(email.value);

    if (!response?.error) {
      console.log('Pass reset');
    } else {
      console.log('Error');
    }

    setLoading(false);
  };

  return (
    <Layout>
      <BackButton />
      <Box style={styles.container} padding="l">
        <Text variant="h3">Forgot your password?</Text>
        <Text variant="subtitle2" style={styles.subtitle}>
          Please enter the email address associated with your account and We will email you a link
          to reset your password.
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
        <Button
          label="Reset Password"
          onPress={onSendPress}
          style={styles.resetPasswordButton}
          disabled={!email.value}
        />
      </Box>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  subtitle: {
    marginVertical: 12,
  },
  resetPasswordButton: {
    borderRadius: 8,
  },
});

export default memo(ForgotPasswordScreen);
