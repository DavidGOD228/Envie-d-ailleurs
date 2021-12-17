import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { getPoi, order } from '../../api/actions';
import { parseLocations } from '../../helpers/functions';
import { Alert } from 'react-native-web';
import { storageValues, STRINGS } from '../../constants';

const AppContext = React.createContext({});

export const AppContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [cardIds, setCardIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState([]);

  useEffect(() => {
    getLocations();
    initOrderCount();
  }, []);

  const initOrderCount = async () => {
    const cart = await AsyncStorage.getItem(storageValues.cart);
    if (cart) {
      try {
        setCardIds(JSON.parse(cart));
      } catch (e) {
        console.warn(e);
        setCardIds([]);
      }
    } else {
      setCardIds([]);
    }
  };

  const getLocations = async () => {
    setIsLoading(true);
    const rs = await getPoi();
    setIsLoading(false);
    if (rs?.data) {
      const locations = parseLocations(rs?.data);
      setLocations(locations);
    }
  };

  const getLocationById = (id) => {
    return locations.find((item) => item.id === id);
  };

  const createOrder = async (data) => {
    setIsLoading(true);
    const res = await order(data);
    setIsLoading(false);
    return handleCreateOrder(res);
  };

  const handleCreateOrder = (res) => {
    if (res?.code === 200) {
      showSuccessAlert();
      setCardIds([]);
      setCheckboxChecked([]);
      AsyncStorage.setItem(storageValues.cart, JSON.stringify([]));
      return true;
    }
    return false;
  };

  const showSuccessAlert = () => {
    Alert.alert(STRINGS.VISITED.success);
  };

  const removeLocationsFromSelected = (id) => {
    cardIds.splice(id, 1);
    setCardIds([...cardIds]);
  };

  const handleAddToCart = (id) => {
    setCardIds([...cardIds, id]);
  };

  return (
    <AppContext.Provider
      value={{
        locations,
        getLocations,
        getLocationById,
        createOrder,
        cardIds,
        isLoading,
        checkboxChecked,
        setCheckboxChecked,
        handleAddToCart,
        removeLocationsFromSelected,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
