import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
} from 'react-native';
import { styles } from './styles';
import CartIcon from '../../../assets/cart.svg';
import Logo from '../../../assets/logo.svg';
import { ROUTES, TEXT_TEMPLATES, searchTypes } from '../../constants';
import { CheckBox } from '../check-box/checkBox';

export const SideBar = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState([]);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const cartClickHandler = () => navigation.replace(ROUTES.ORDER);
  const inputClickHandler = () => {
    console.log('text', text);
    onChangeText('');
  };
  const searchHandler = (id) => {
    setCheckboxChecked((state) => {
      if (state.includes(id)) {
        return state.filter((item) => {
          item.id !== id;
        });
      }
      return [...state, id];
    });
  };

  console.log(checkboxChecked);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.image, { width: windowWidth }]}
        source={require('../../../assets/side-menu-bg.png')}
      >
        <View style={[styles.content, { height: windowHeight }]}>
          <TouchableOpacity activeOpacity={0.7}>
            <CartIcon onPress={cartClickHandler} />
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={onChangeText}
              placeholder={TEXT_TEMPLATES.SIDE_BAR.input}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.inputButton}
              onPress={inputClickHandler}
            >
              <Text style={styles.inputButtonText}>
                {TEXT_TEMPLATES.SIDE_BAR.inputButton}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkBoxGroup}>
            {searchTypes.map((item) => (
              <CheckBox
                key={item.id}
                item={item}
                isChecked={!checkboxChecked.includes(item.id)}
                onUserPress={searchHandler}
              />
            ))}
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {TEXT_TEMPLATES.SIDE_BAR.description}
            </Text>
          </View>

          <View style={styles.logoContainer}>
            <Logo style={styles.logo} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
