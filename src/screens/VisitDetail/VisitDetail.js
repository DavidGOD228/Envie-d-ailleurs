import React, { useLayoutEffect, useState, useContext } from 'react';
import { StatusBar, Text, ScrollView, View } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { THEME } from '../../theme';
import { SideBar } from '../../components/SideBar/SideBar';
import { BackButton } from '../../components/BackButton/BackButton';
import { PhotoSlider } from '../../components/PhotoSlider/PhotoSlider';
import { AddButton } from '../../components/AddButton/AddButton';
import AppContext from '../../context/AppContext/AppContext';
import { getImages } from '../../helpers/functions';
import { styles } from './styles';

export const VisitDetail = ({ navigation, route }) => {
  const { getLocationById } = useContext(AppContext);
  const [location, setLocation] = useState({});

  const { id } = route.params;

  useLayoutEffect(() => {
    const item = getLocationById(id);
    const images = getImages(item);
    setLocation({ ...item, images });
  }, []);

  return (
    <View style={styles.flex}>
      <StatusBar backgroundColor={THEME.COLORS.white} />
      <SideBar navigation={navigation} />
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
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
        </View>
        <AddButton id={location.id} />
      </ScrollView>
      <BackButton />
    </View>
  );
};
