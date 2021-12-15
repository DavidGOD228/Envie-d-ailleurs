import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import { ScalableImage } from './ScalableImage';

export const PhotoLibrary = ({ images }) => {
  return (
    <View style={styles.container}>
      {images.map((item, index) => {
        return (
          <View style={styles.imageWrapper} key={item.url + index}>
            <ScalableImage url={item.url} />
          </View>
        );
      })}
    </View>
  );
};
