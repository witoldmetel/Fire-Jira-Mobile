import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useTheme} from '../../hooks/useTheme';
import {Slide} from './Slide';

export const Onboarding = () => {
  const {spacing} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView style={{margin: spacing.l}}>
          <Slide />
          <Slide />
          <Slide />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text>Onboarding</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },
  slider: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },
  footer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Roboto-Black',
  },
});
