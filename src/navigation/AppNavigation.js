import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainUserScreen } from '../screens/main-user-screen/MainUserScreen';
import { DetailsScreen } from '../screens/details-screen/DetailsScreen';
import { OnBoardingScreen } from '../screens/on-boarding-screen/OnBoardingScreen';
import { OrderScreen } from '../screens/order-screen/OrderScreen';
import { ROUTES } from '../constants';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ROUTES.ON_BOARDING} component={OnBoardingScreen} />
        <Stack.Screen name={ROUTES.MAIN} component={MainUserScreen} />
        <Stack.Screen name={ROUTES.DETAILS} component={DetailsScreen} />
        <Stack.Screen name={ROUTES.ORDER} component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
