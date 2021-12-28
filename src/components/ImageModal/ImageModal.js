import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { ScalableImage } from '../PhotoLibrary/ScalableImage';

export const ImageModal = ({ uri, handleClose }) => {
  return (
    <View style={styles.overlay} onTouchStart={handleClose}>
      <ScalableImage url={uri} style={{ width: 100, height: 100 }} />
    </View>
  );
};
