import React, {memo} from 'react';
import {TextInput as Input, StyleSheet, Text, View} from 'react-native';

import {theme} from '../../theme';

type TextInputProps = React.ComponentProps<typeof Input> & {errorText?: string};

const TextInput = ({errorText, ...props}: TextInputProps) => (
  <View style={styles.container}>
    <Input placeholderTextColor={theme.palette.grey[600]} style={styles.input} {...props} />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.grey[600],
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
  },
  error: {
    fontSize: 14,
    color: theme.palette.error.main,
    paddingHorizontal: 4,
    paddingTop: 8,
  },
});

export default memo(TextInput);
