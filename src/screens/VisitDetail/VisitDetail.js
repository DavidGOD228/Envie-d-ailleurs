import React, { useLayoutEffect, useState, useContext, useEffect } from 'react';
import { Text, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { SideBar } from '../../components/SideBar/SideBar';
import { BackButton } from '../../components/BackButton/BackButton';
import { PhotoSlider } from '../../components/PhotoSlider/PhotoSlider';
import { AddButton } from '../../components/AddButton/AddButton';
import AppContext from '../../context/AppContext/AppContext';
import { getImages, getImageUrl, isAndroid } from '../../helpers/functions';
import { styles } from './styles';
import { CommentInput } from '../../components/CommentInput/CommentInput';
import { ImageModal } from '../../components/ImageModal/ImageModal';

export const VisitDetail = ({ navigation, route }) => {
  const [visible, setIsVisible] = useState(false);
  const [sliderImages, setSliderImage] = useState(null);
  const { getLocationById, isCommentUnlocked, getComment } =
    useContext(AppContext);
  const [location, setLocation] = useState({});
  const [comment, setComment] = useState('');
  const { id } = route.params;

  useLayoutEffect(() => {
    const item = getLocationById(id);
    const images = getImages(item);
    setLocation({ ...item, images });
    checkComment(item.id);
  }, []);

  useEffect(() => {
    if (location) {
      checkComment(location.id);
    }
  }, [isCommentUnlocked]);

  const checkComment = async (id) => {
    if (isCommentUnlocked && id) {
      const comment = await getComment(id);
      setComment(comment?.comment);
    }
  };

  const handleImageModalClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={isAndroid ? null : 'padding'}
        style={{ flex: 1 }}
      >
        <SideBar navigation={navigation} />
        <ScrollView style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{location.name}</Text>

            {!!location?.images?.length && (
              <View>
                <PhotoSlider
                  images={location.images}
                  setSliderImage={setSliderImage}
                  setIsVisible={setIsVisible}
                />
              </View>
            )}
            <View style={styles.priceWrapper}>
              <Text style={styles.priceTitle}>{location.tariff}</Text>
            </View>
            <View style={styles.description}>
              <HTMLView value={location.description} stylesheet={styles} />
            </View>
            {!!comment && isCommentUnlocked && (
              <CommentInput comment={comment} />
            )}
          </View>
          <AddButton id={location.id} />
        </ScrollView>
      </KeyboardAvoidingView>
      <BackButton />
      {visible && (
        <ImageModal uri={sliderImages} handleClose={handleImageModalClose} />
      )}
    </View>
  );
};
