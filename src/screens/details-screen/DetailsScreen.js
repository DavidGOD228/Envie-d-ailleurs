import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Details Screen</Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Order')}
      >
        <Text style={styles.buttonText}>Go to Order Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
