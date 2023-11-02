import React, { ReactElement, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Agbalumo': require('./assets/fonts/Agbalumo/Agbalumo-Regular.ttf'),
    'PlaypenSans': require('./assets/fonts/PlaypenSans/PlaypenSans-Medium.ttf'),
  });

  useEffect(() => {
    (async function(){
      await SplashScreen.hideAsync();
    })();
  }, [fontsLoaded]);
  
  if(fontError) throw new Error('Error with loading fonts');
  if(!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  )
}