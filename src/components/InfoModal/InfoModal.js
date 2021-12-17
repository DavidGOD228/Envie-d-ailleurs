import React from 'react';
import {
  View,
  Modal,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './styles';
import Close from '../../../assets/close.svg';
import { Button } from '../Button/Button';
import { useNavigation } from '@react-navigation/native';
import { ROUTES, STRINGS } from '../../constants';
import HTMLView from 'react-native-htmlview';

export const InfoModal = ({ item, isVisible, setIsVisible }) => {
  const { url, title, description, id } = item;
  const navigation = useNavigation();
  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(!isVisible);
  };

  const handleOpenScreen = () => {
    handleClose();
    navigation.navigate(ROUTES.DETAILS, { id });
  };
  return (
    <Modal
      style={[styles.border]}
      animationType="fade"
      transparent={true}
      visible={isVisible}
      presentationStyle={'overFullScreen'}
      onRequestClose={handleClose}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.modal}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.closeImage} onTouchStart={handleClose}>
          <Close />
        </View>

        {!!url && <Image style={styles.image} source={{ uri: url }} />}
        <View style={[styles.title, styles.description]}>
          <HTMLView value={description} />
        </View>

        <View style={styles.buttonWrapper} onTouchStart={handleOpenScreen}>
          <Button
            text={STRINGS.VISITED.apply}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </View>
    </Modal>
  );
};
