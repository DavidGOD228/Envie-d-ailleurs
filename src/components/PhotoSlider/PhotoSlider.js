import React, { createRef, useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { styles } from './styles';
import LeftArrow from '../../../assets/sliderLeftArrow.svg';
import { getImageUrl } from '../../helpers/functions';
import ImageView from 'react-native-image-viewing';

const offset = 220;
const sideBarWidth = 320;

const { width } = Dimensions.get('window');

export const PhotoSlider = ({ images }) => {
  const listRef = createRef();
  const scroolCoordinates = createRef();
  const [isHideArrow, setIsHideArrow] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const [sliderImages, setSliderImage] = useState(null);

  const handleOpenImage = (uri) => {
    setSliderImage([{ uri }]);
    setIsVisible(true);
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleOpenImage(getImageUrl(item))}>
        <Image
          style={styles.image}
          modalImageStyle={styles.image}
          source={{ uri: getImageUrl(item) }}
        />
      </TouchableOpacity>
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
      <ImageView
        images={sliderImages}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
};
