import React, { useContext } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import PlusButton from '../../components/Svg/PlusButton';
import { styles } from './styles';
import AppContext from '../../context/AppContext/AppContext';
import {
  getCartsFromStorage,
  setCartsToStorage,
} from '../../helpers/functions';

export const AddButton = ({ id }) => {
  const { handleAddToCart } = useContext(AppContext);

  const handleAdd = async () => {
    const cart = await getCartsFromStorage();
    let newIds = [id];
    if (cart) {
      newIds = JSON.parse(cart);
      newIds.push(id);
    }
    setCartsToStorage(newIds);
    handleAddToCart(id);
    Alert.alert('POI ajouté au panier');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAdd}>
        <PlusButton />
      </TouchableOpacity>
    </View>
  );
};
