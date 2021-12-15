import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const CheckBox = ({ item, isChecked, onUserPress }) => {
  const { id, color, value } = item;
  const checkBoxPressHandler = () => onUserPress(id);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={checkBoxPressHandler}
        style={[
          styles.checkBox,
          isChecked ? styles.containerLeft : styles.containerRight,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]} />
      </TouchableOpacity>

      <Text style={styles.text}>{value}</Text>
    </View>
  );
};
