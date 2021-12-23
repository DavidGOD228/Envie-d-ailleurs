import { imageUrl } from '../config/config';
import { Alert, AsyncStorage, Platform } from 'react-native';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { storageKeys, STRINGS } from '../constants';

export const parseLocations = (data) => {
  return data.map((loc) => ({
    latitude: loc.data.lat,
    longitude: loc.data.long,
    ...loc.data,
  }));
};

export const isAndroid = Platform.OS === 'android';

export const getImageUrl = (name) => imageUrl + name;

export const getImages = (item) => {
  const { image_first, image_second, image_third, image_fourth } = item;
  return [image_first, image_second, image_third, image_fourth].filter(
    (img) => !!img
  );
};

export const getMarkerColor = (type) => {
  switch (type) {
    case 'town':
      return '#941aaa';
    case 'visit':
      return '#1a41aa';
    case 'hotel':
      return '#ff8900';
    case 'restaurant':
      return '#5bb500';
    default:
      return '#5bb500';
  }
};

export const setCartsToStorage = (ids) => {
  const value = ids ? ids : [];
  AsyncStorage.setItem(storageKeys.cart, JSON.stringify(value));
};

export const getCartsFromStorage = async () => {
  return await AsyncStorage.getItem(storageKeys.cart);
};

export const getUniqueId = () => {
  let id = Constants.deviceId;
  if (!id) {
    id = Device.deviceName;
  }
  return id;
};

export const showSuccessAlert = () => {
  Alert.alert(STRINGS.VISITED.success);
};
