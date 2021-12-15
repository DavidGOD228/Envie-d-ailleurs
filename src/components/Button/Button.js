import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../screens/OnBoardingScreen/styles';

export const Button = ({ onPress, text, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { ...containerStyle }]}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
