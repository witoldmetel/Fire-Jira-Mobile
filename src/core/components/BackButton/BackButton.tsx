import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

type BackButtonProps = {
  onPress?: () => void;
};

export const BackButton = ({onPress}: BackButtonProps) => {
  const router = useNavigation();

  return (
    <TouchableOpacity onPress={onPress ?? router.goBack} style={styles.container}>
      <Icon name="arrow-back" size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 24,
  },
});
