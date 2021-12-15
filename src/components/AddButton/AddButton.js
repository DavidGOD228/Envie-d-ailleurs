import React, { useContext } from 'react';
import { View, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import Button from '../../../assets/addButton.svg';
import { styles } from './styles';
import AppContext from '../../context/AppContext/AppContext';

export const AddButton = ({ id }) => {
  const { handleAddToCart } = useContext(AppContext);
  const handleAdd = async () => {
    const cart = await AsyncStorage.getItem('cart');
    let newIds = [id];
    if (cart) {
      newIds = JSON.parse(cart);
      newIds.push(id);
    }
    AsyncStorage.setItem('cart', JSON.stringify(newIds));
    handleAddToCart(id);
    Alert.alert('POI ajouté au panier');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAdd}>
        <Button />
      </TouchableOpacity>
    </View>
  );
};
