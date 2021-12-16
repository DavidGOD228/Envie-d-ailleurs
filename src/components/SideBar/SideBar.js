import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
  Keyboard,
  Alert,
} from 'react-native';
import { styles } from './styles';
import CartIcon from '../../../assets/cart.svg';
import Logo from '../../../assets/logo.svg';
import { STRINGS, searchTypes, ROUTES } from '../../constants';
import { CheckBox } from '../CheckBox/CheckBox';
import { Badge } from '../Badge/Badge';
import SideBackground from '../Svg/SideBackground';
import AppContext from '../../context/AppContext/AppContext';
import { useNavigation } from '@react-navigation/native';

export const SideBar = ({
  isHideAll,
  onFilter = () => {},
  onSearch = () => {},
}) => {
  const [text, onChangeText] = useState('');
  const { cardIds, checkboxChecked, setCheckboxChecked } =
    useContext(AppContext);
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  const inputClickHandler = () => {
    onSearch(text);
    Keyboard.dismiss();
  };

  useEffect(() => {
    onFilter(checkboxChecked);
  }, [checkboxChecked]);

  const handleChange = (id) => {
    onChangeText('');
    setCheckboxChecked((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((item) => id !== item);
      }
      return [...prevState, id];
    });
  };

  const handleTextChange = (text) => {
    onChangeText(text);
    setCheckboxChecked([]);
  };

  const handleOpenCart = () => {
    if (cardIds.length) {
      navigation.navigate(ROUTES.VISITES);
    } else {
      Alert.alert('Veuillez ajouter Poi');
    }
  };
  return (
    <View style={styles.container}>
      {!isHideAll && (
        <View style={[styles.content, { height: windowHeight }]}>
          <TouchableOpacity activeOpacity={1} onPress={handleOpenCart}>
            <View style={styles.badgeWrapper}>
              <CartIcon />
              <Badge count={cardIds.length} />
            </View>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={handleTextChange}
              placeholder={STRINGS.SIDE_BAR.input}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.inputButton}
              onPress={inputClickHandler}
            >
              <Text style={styles.inputButtonText}>
                {STRINGS.SIDE_BAR.inputButton}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkBoxGroup}>
            {searchTypes.map((item) => (
              <CheckBox
                key={item.id}
                item={item}
                isChecked={!checkboxChecked.includes(item.id)}
                onUserPress={handleChange}
              />
            ))}
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {STRINGS.SIDE_BAR.description}
            </Text>
          </View>

          <View style={styles.logoContainer}>
            <Logo style={styles.logo} />
          </View>
        </View>
      )}
      <SideBackground style={[styles.container, { width: '100%' }]} />
    </View>
  );
};
