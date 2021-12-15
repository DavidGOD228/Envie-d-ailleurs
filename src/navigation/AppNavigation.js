import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainUserScreen } from '../screens/MainUserScreen/MainUserScreen';
import { OnBoardingScreen } from '../screens/OnBoardingScreen/OnBoardingScreen';
import { ROUTES } from '../constants';
import { VisitesScreen } from '../screens/VisitesScreen/VisitesScreen';
import { VisitDetail } from '../screens/VisitDetail/VisitDetail';
import { AppContextProvider } from '../context/AppContext/AppContext';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={ROUTES.ON_BOARDING}
            component={OnBoardingScreen}
          />
          <Stack.Screen name={ROUTES.MAIN} component={MainUserScreen} />
          <Stack.Screen name={ROUTES.VISITES} component={VisitesScreen} />
          <Stack.Screen name={ROUTES.DETAILS} component={VisitDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default AppNavigation;
