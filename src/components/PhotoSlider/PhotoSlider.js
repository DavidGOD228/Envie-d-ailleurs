import React, { createRef, useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { styles } from './styles';
import LeftArrow from '../../../assets/sliderLeftArrow.svg';
import { getImageUrl } from '../../helpers/functions';
import ImageModal from 'react-native-image-modal';

const offset = 220;
const sideBarWidth = 320;

const { width } = Dimensions.get('window');

export const PhotoSlider = ({ images }) => {
  const listRef = createRef(null);
  const scroolCoordinates = createRef(null);
  const [isHideArrow, setIsHideArrow] = useState(false);
  const renderItem = ({ item }) => {
    return (
      <ImageModal style={styles.image} source={{ uri: getImageUrl(item) }} />
    );
  };

  useEffect(() => {
    setIsHideArrow(images && offset * images.length < width - sideBarWidth);
  }, [images]);

  const keyExtractor = ({ index }) => {
    return index;
  };

  const getNewValue = (value) => {
    const maxValue = offset * (images.length - 2);
    if (value < 0) {
      return 0;
    }

    if (maxValue < value) {
      return maxValue;
    }
    return value;
  };

  const scrollByX = (newX) => {
    scroolCoordinates.current = getNewValue(newX);
    listRef.current.scrollToOffset({ animated: true, offset: newX });
  };

  const handleLeft = () => {
    const newX = scroolCoordinates.current - offset;
    scrollByX(newX);
  };

  const handleRight = () => {
    const newX = scroolCoordinates.current + offset;
    scrollByX(newX);
  };

  const handleScroll = (event) => {
    scroolCoordinates.current = event.nativeEvent.contentOffset.x;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLeft}>
        <LeftArrow style={[styles.arrow, isHideArrow && styles.hide]} />
      </TouchableOpacity>
      <FlatList
        ref={listRef}
        horizontal
        data={images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleScroll}
        con
      />
      <TouchableOpacity onPress={handleRight}>
        <LeftArrow
          style={[styles.arrow, styles.rightArrow, isHideArrow && styles.hide]}
        />
      </TouchableOpacity>
    </View>
  );
};
