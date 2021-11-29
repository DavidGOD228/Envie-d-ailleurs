import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const OrderScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Order Screen</Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('OnBoarding')}
      >
        <Text style={styles.buttonText}>Go to OnBoarding Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
