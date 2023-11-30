import React, { ReactElement } from 'react';
import { ImageBackground, Image, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { pages } from './pages';
import type { RootStackParamList } from './pages';

import MenuBar from '../shared/MenuBar';
import HeaderTitle, { Header } from '../shared/Header';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AboutStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#AEDFE1",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitle: HeaderTitle,
        // header: Header
      }}
    >
      <Stack.Screen 
        name={pages.about.name} 
        component={pages.about.Component}
        options={{
          title: "About GameZone",
          headerLeft: () => <MenuBar/>
        }}
      />
    </Stack.Navigator>
  )
}

export default AboutStack;