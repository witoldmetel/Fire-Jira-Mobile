import React, {memo} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

type BackButtonProps = {
  onPress: () => void;
};

const BackButton = ({onPress}: BackButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image style={styles.image} source={require('../../../../assets/images/arrow_back.png')} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 24,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default memo(BackButton);
