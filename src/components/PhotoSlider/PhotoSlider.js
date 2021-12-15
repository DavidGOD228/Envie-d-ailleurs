import React, { createRef } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LeftArrow from '../../../assets/sliderLeftArrow.svg';
import { getImageUrl } from '../../helpers/functions';

const offset = 220;

export const PhotoSlider = ({ images }) => {
  const listRef = createRef(null);
  const scroolCoordinates = createRef(null);

  const renderItem = ({ item }) => {
    return <Image style={styles.image} source={{ url: getImageUrl(item) }} />;
  };

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
        <LeftArrow style={styles.arrow} />
      </TouchableOpacity>
      <FlatList
        ref={listRef}
        horizontal
        data={images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleScroll}
      />
      <TouchableOpacity onPress={handleRight}>
        <LeftArrow style={[styles.arrow, styles.rightArrow]} />
      </TouchableOpacity>
    </View>
  );
};
