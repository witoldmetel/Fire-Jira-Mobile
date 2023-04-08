import React, {memo} from 'react';
import {StyleSheet} from 'react-native';

import {logoutUser} from '../api/auth-api';
import {Layout, Button, Logo, Box} from '../core/components';

const HomeScreen = ({navigation}: {navigation: any}) => (
  <Layout>
    <Box style={styles.container} padding="l">
      <Logo />
      <Button
        label="Logout"
        onPress={() => logoutUser().then(() => navigation.navigate('Welcome'))}
        variant="outlined"
      />
    </Box>
  </Layout>
);

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default memo(HomeScreen);
