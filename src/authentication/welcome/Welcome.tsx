import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import {Text, Button, Layout, Logo} from '../../core/components';
import {theme} from '../../core/theme';

export const Welcome = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  function signIn() {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  function signUp() {
    console.log('login!');
  }

  function signOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <Layout>
        <Logo />
        <Text variant="h2">Fire Jira</Text>
        {/* <Box style={{backgroundColor: '#F1F9FF', padding: 10, borderRadius: 8}}>
          <Text variant="subtitle1" style={{textAlign: 'center'}}>
            Demo email : joedoe@firejira.com / password : firejira
          </Text>
        </Box> */}
        <Button label="Login" onPress={() => navigation.navigate('LoginScreen')} />
        <Button label="Sign Up" onPress={() => navigation.navigate('RegisterScreen')} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Logo />
      <View>
        <Text>Welcome {user.email}</Text>
        <Button label="Logout" onPress={signOut} />
      </View>
    </Layout>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.palette.common.white,
//   },
// });
