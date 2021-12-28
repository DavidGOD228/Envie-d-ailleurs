import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { getCommentForPoi, getPoi, order } from '../../api/actions';
import {
  getCartsFromStorage,
  parseLocations,
  setCartsToStorage,
  showSuccessAlert,
} from '../../helpers/functions';

const AppContext = React.createContext({});

export const AppContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [cardIds, setCardIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState([]);
  const [isCommentUnlocked, setIsCommentUnlocked] = useState(false);

  useEffect(() => {
    getLocations().catch((e) => {
      console.warn(e);
    });
    initOrderCount().catch((e) => {
      console.warn(e);
    });
  }, []);

  const initOrderCount = async () => {
    const cart = await getCartsFromStorage();
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
      setCartsToStorage([]);
      return true;
    }
    return false;
  };

  const removeLocationsFromSelected = (id) => {
    cardIds.splice(id, 1);
    setCardIds([...cardIds]);
    setCartsToStorage(cardIds);
  };

  const handleAddToCart = (id) => {
    setCardIds([...cardIds, id]);
  };

  const handleUnlockComment = async (text) => {
    if (text === '5362') {
      setIsCommentUnlocked(!isCommentUnlocked);
    } else {
      Alert.alert('Code erroné');
      setIsCommentUnlocked(false);
    }
  };

  const getComment = async (id) => {
    return getCommentForPoi({ poi_id: id, password: '5362' });
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
        isCommentUnlocked,
        handleUnlockComment,
        getComment,
        setIsCommentUnlocked,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
