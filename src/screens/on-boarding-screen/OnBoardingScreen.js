import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ROUTES, TEXT_TEMPLATES } from '../../constants';
import Logo from '../../../assets/main-logo.svg';
import { styles } from './styles';

export const OnBoardingScreen = ({ navigation }) => {
  const buttonClickHandler = () => navigation.replace(ROUTES.MAIN);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{TEXT_TEMPLATES.ON_BOARDING.title}</Text>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            {TEXT_TEMPLATES.ON_BOARDING.subTitle}
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {TEXT_TEMPLATES.ON_BOARDING.description}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={buttonClickHandler}>
            <Text style={styles.buttonText}>
              {TEXT_TEMPLATES.ON_BOARDING.button}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Logo style={styles.logo} />
        </View>
      </View>
      <Image
        style={styles.image}
        source={require('../../../assets/on-boarding-img.png')}
      />
    </View>
  );
};
