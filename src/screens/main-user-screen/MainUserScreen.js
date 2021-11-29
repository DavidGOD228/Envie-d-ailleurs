import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { SideBar } from '../../components/side-bar/SideBar';
import { ROUTES } from '../../constants';
import { THEME } from '../../theme';
import { styles } from './styles';

export const MainUserScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={THEME.COLORS.white} />
      <View style={styles.content}>
        <SideBar navigation={navigation} />
        <Text>Main User Screen</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate(ROUTES.DETAILS)}
        >
          <Text style={styles.buttonText}>Go to Details Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
