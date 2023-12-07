import React, { ReactElement } from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { pages } from './pages';
import type { RootStackParamList } from './pages';

import MenuBar from '../shared/MenuBar';
import HeaderTitle from '../shared/Header';
// import HeaderBackground from '../shared/HeaderBackground';

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack(): ReactElement {
  return (
    <Stack.Navigator 
      initialRouteName={pages.home.name}
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: "#0163d2"
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitle: HeaderTitle,
        // headerBackground: HeaderBackground,
        // headerTransparent: true,
      }}
    >
      <Stack.Screen 
        name={pages.home.name} 
        component={pages.home.Component}
        options={{
          title: "GameZone",
          headerLeft: () => <MenuBar/>
        }}
      />
      <Stack.Screen 
        name={pages.reviewDetails.name} 
        component={pages.reviewDetails.Component}
        options={{
          title: "Review Details",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack;