import React, { useState } from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export const ScalableImage = ({ url }) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  Image.getSize(url, (width, height) => {
    setWidth(width);
    setHeight(height);
  });
  return (
    <Image
      style={[styles.image, { width, height }]}
      resizeMode={'cover'}
      source={{ uri: url, width, height }}
    />
  );
};
