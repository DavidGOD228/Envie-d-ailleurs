import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export const Input = ({
  label,
  isRequired,
  value,
  handleValueChange,
  error,
  touched,
  width,
  textarea,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {!!label && (
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>{label}</Text>
          {isRequired && <Text style={styles.label}>*</Text>}
        </View>
      )}
      <TextInput
        {...props}
        value={value}
        returnKeyType={'done'}
        onChangeText={handleValueChange}
        style={[styles.input, textarea ? styles.textarea : null, { width }]}
      />
      {touched && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
