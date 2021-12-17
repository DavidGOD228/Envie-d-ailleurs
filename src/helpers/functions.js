import { imageUrl } from '../config/config';
import { Platform } from 'react-native';
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
