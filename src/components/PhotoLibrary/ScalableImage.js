import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';

export const ScalableImage = ({ url }) => {
  const [width, setWidth] = useState(200);
  Image.getSize(url, (width) => {
    console.log(width);
    setWidth(width);
  });
  return (
    <Image
      style={[styles.image, { width }]}
      resizeMode={'cover'}
      source={{ url, width }}
    />
  );
};
