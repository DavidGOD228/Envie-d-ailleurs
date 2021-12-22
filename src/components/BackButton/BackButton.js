import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Button from '../../../assets/backButton.svg';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const BackButton = ({ isHideAll }) => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={isHideAll ? styles.topContainer : styles.container}>
      <TouchableOpacity onPress={backHandler}>
        <Button />
      </TouchableOpacity>
    </View>
  );
};
