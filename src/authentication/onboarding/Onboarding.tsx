import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Onboarding = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    text: {
      textAlign: 'center',
      fontSize: 24,
      fontFamily: 'SF-Pro-Text-Bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
    </View>
  );
};
