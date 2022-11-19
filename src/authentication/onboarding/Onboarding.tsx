import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Onboarding = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#777',
    },
    text: {
      textAlign: 'center',
      fontSize: 24,
      fontFamily: 'Roboto-Black',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
    </View>
  );
};
