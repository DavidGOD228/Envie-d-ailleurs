import React, { useLayoutEffect, useState, useContext, useEffect } from 'react';
import { Text, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { SideBar } from '../../components/SideBar/SideBar';
import { BackButton } from '../../components/BackButton/BackButton';
import { PhotoSlider } from '../../components/PhotoSlider/PhotoSlider';
import { AddButton } from '../../components/AddButton/AddButton';
import AppContext from '../../context/AppContext/AppContext';
import { getImages, isAndroid } from '../../helpers/functions';
import { styles } from './styles';
import { CommentInput } from '../../components/CommentInput/CommentInput';
import { useKeyboard } from '../../hooks/useKeyboard';

export const VisitDetail = ({ navigation, route }) => {
  const { getLocationById, isCommentUnlocked, getComment } =
    useContext(AppContext);
  const [location, setLocation] = useState({});
  const [comment, setComment] = useState('');
  const isKeyboardOpen = useKeyboard();
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

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={isAndroid ? null : 'padding'}
        style={{ flex: 1 }}
      >
        <SideBar navigation={navigation} />
        <ScrollView style={styles.container}>
          <View
            style={[styles.wrapper, isKeyboardOpen && styles.keyboardShowed]}
          >
            <Text style={styles.title}>{location.name}</Text>

            {!!location?.images?.length && (
              <View>
                <PhotoSlider images={location.images} />
              </View>
            )}
            <View style={styles.priceWrapper}>
              <Text style={styles.priceTitle}>Tarif</Text>
              <Text style={styles.price}>À partir de 25€/ personne</Text>
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
    </View>
  );
};
