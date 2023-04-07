import React, {memo} from 'react';

import {logoutUser} from '../api/auth-api';
import {Layout, Text, Button, Logo} from '../core/components';

const Dashboard = () => (
  <Layout>
    <Logo />
    <Text>Let’s start</Text>
    <Text>
      Your amazing app starts here. Open you favourite code editor and start editing this project.
    </Text>
    <Button label="Logout" onPress={() => logoutUser()} />
  </Layout>
);

export default memo(Dashboard);
