import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, StatusBar, LayoutAnimation } from 'react-native';
import Constants from 'expo-constants';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

import { SideBar } from '../../components/SideBar/SideBar';
import { THEME } from '../../theme';
import { styles } from './styles';
import MarkerSvg from '../../components/Svg/MarkerSvg';
import { InfoModal } from '../../components/InfoModal/InfoModal';
import AppContext from '../../context/AppContext/AppContext';
import {
  getImageUrl,
  getMarkerColor,
  isAndroid,
} from '../../helpers/functions';

const INITIAL_REGION = {
  latitude: 42.5,
  longitude: 15.2,
  latitudeDelta: isAndroid ? 20 : 0,
  longitudeDelta: isAndroid ? 20 : 0,
};

const FILTER_TYPES = {
  type: 'type',
  name: 'name',
};

const edgePadding = { top: 150, left: 150, bottom: 150, right: 150 };
const valueForSearch = [
  'name',
  'description',
  'city',
  'country',
  'address',
  'postal',
];

export const MainUserScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [filteredLocations, setFilteredLocations] = useState([]);

  const { locations } = useContext(AppContext);

  useEffect(() => {
    setFilteredLocations(locations);
  }, []);

  const handleMarkerPress = (item) => {
    let imageUrl = '';
    if (item.image_first) {
      imageUrl = getImageUrl(item.image_first);
    }
    setModalItem({
      title: item.name,
      description: item.description,
      url: imageUrl,
      id: item.id,
    });
    setModalVisible(true);
  };

  const handleFilter = (filters, type) => {
    let filtered = locations;
    if (filters && filters.length > 0) {
      filtered = getFiltered(filters, type);
    }
    setFilteredLocations(filtered);
  };

  const getFiltered = (filters, type) => {
    switch (type) {
      case FILTER_TYPES.type:
        return getFilterByType(filters);
      case FILTER_TYPES.name:
        return getFilterByName(filters);
      default:
        return locations;
    }
  };

  const getFilterByType = (filters) => {
    return locations.filter((location) => !filters.includes(location.type));
  };

  const getFilterByName = (searchedText) => {
    return locations.filter((location) =>
      searchByFields(location, valueForSearch, searchedText)
    );
  };

  const searchByFields = (item, fields, searched) => {
    return fields.some((field) =>
      item[field].toLowerCase().includes(searched.toLowerCase())
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SideBar
        navigation={navigation}
        onFilter={(filters) => handleFilter(filters, FILTER_TYPES.type)}
        onSearch={(filters) => handleFilter(filters, FILTER_TYPES.name)}
      />
      <MapView
        initialRegion={INITIAL_REGION}
        edgePadding={edgePadding}
        layoutAnimationConf={LayoutAnimation.Presets.easeInEaseOut}
        style={[styles.map, { marginTop: -Constants.statusBarHeight }]}
      >
        {filteredLocations.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={item}
              onPress={() => handleMarkerPress(item)}
            >
              <MarkerSvg fill={getMarkerColor(item.type)} />
            </Marker>
          );
        })}
      </MapView>
      {modalVisible && (
        <InfoModal
          item={modalItem}
          isVisible={modalVisible}
          setIsVisible={setModalVisible}
        />
      )}
    </SafeAreaView>
  );
};
