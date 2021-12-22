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
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import CartIcon from '../../../assets/cart.svg';
import Logo from '../../../assets/logo.svg';
import { STRINGS, searchTypes, ROUTES } from '../../constants';
import { CheckBox } from '../CheckBox/CheckBox';
import { Badge } from '../Badge/Badge';
import SideBackground from '../Svg/SideBackground';
import Clear from '../Svg/Close';
import AppContext from '../../context/AppContext/AppContext';
import { THEME } from '../../theme';
import { PasswordForComment } from './Components/PasswordForComment';

export const SideBar = ({
  isHideAll,
  onFilter = () => {},
  onSearch = () => {},
}) => {
  const [text, onChangeText] = useState('');
  const isShowClearButton = text.length > 0;
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

  const handleClearText = () => {
    handleTextChange('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {!isHideAll && (
        <View style={[styles.content, { height: windowHeight }]}>
          <View style={styles.sideHeaderWrapper}>
            <TouchableOpacity activeOpacity={1} onPress={handleOpenCart}>
              <View style={styles.badgeWrapper}>
                <CartIcon />
                <Badge count={cardIds.length} />
              </View>
            </TouchableOpacity>
            <PasswordForComment />
          </View>
          <View style={styles.inputContainer}>
            {isShowClearButton && (
              <TouchableOpacity onPress={handleClearText}>
                <Clear width={20} style={styles.clearIcon} />
              </TouchableOpacity>
            )}
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={handleTextChange}
              placeholder={STRINGS.SIDE_BAR.input}
              placeholderTextColor={THEME.COLORS.mainColor}
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
      <SideBackground style={styles.bgImage} />
    </View>
  );
};
