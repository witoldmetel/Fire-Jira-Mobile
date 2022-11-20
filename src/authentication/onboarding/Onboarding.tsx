import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../../hooks/useTheme';
import {Slide} from './Slide';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },
  footer: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Roboto-Black',
  },
});

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
      <View>
        <Text style={styles.footer}>Onboarding</Text>
      </View>
    </View>
  );
};
