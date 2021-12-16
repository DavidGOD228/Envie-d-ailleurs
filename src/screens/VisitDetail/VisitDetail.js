import React, { useLayoutEffect, useState, useContext } from 'react';
import { StatusBar, Text, ScrollView, View } from 'react-native';
import { styles } from './styles';
import { THEME } from '../../theme';
import { SideBar } from '../../components/SideBar/SideBar';
import { BackButton } from '../../components/BackButton/BackButton';
import { PhotoSlider } from '../../components/PhotoSlider/PhotoSlider';
import { AddButton } from '../../components/AddButton/AddButton';
import AppContext from '../../context/AppContext/AppContext';
import HTMLView from 'react-native-htmlview';
import { getImages } from '../../helpers/functions';

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
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={THEME.COLORS.white} />
      <SideBar navigation={navigation} />
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
          <HTMLView value={location.description} />
        </View>
      </View>
      <BackButton />
      <AddButton id={location.id} />
    </ScrollView>
  );
};
