import React, {memo} from 'react';
import {Text} from 'react-native';
import {Layout, Button, Logo} from '../core/components';

type Props = {
  navigation: any;
};

const RegisterScreen = ({navigation}: Props) => {
  return (
    <Layout>
      <Button label="Go back" onPress={() => navigation.navigate('Welcome')} />

      <Logo />

      <Text>Create Account</Text>
    </Layout>
  );
};

export default memo(RegisterScreen);
