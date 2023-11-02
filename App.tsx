import React, { ReactElement, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Agbalumo': require('./assets/fonts/Agbalumo/Agbalumo-Regular.ttf'),
    'PlaypenSans': require('./assets/fonts/PlaypenSans/PlaypenSans-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])
  
  if(!fontsLoaded) return null;

  return (
    <View
      onLayout={onLayoutRootView}
    >
      <Home/>
    </View>
  )
}