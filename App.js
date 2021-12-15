import React, { useState, useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import AppNavigation from './src/navigation/AppNavigation';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <AppNavigation />;
}
