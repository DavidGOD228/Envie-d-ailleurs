import React from 'react';
import { View, Text, Image } from 'react-native';
import { ROUTES, STRINGS } from '../../constants';
import Logo from '../../../assets/main-logo.svg';
import { styles } from './styles';
import { Button } from '../../components/Button/Button';

export const OnBoardingScreen = ({ navigation }) => {
  const buttonClickHandler = () => navigation.replace(ROUTES.MAIN);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{STRINGS.ON_BOARDING.title}</Text>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>{STRINGS.ON_BOARDING.subTitle}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {STRINGS.ON_BOARDING.description}
          </Text>
        </View>
        <Button
          onPress={buttonClickHandler}
          text={STRINGS.ON_BOARDING.button}
        />
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
