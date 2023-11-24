import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { pages } from './pages';
import type { RootStackParamList } from './pages';

// import Header from '../shared/Header';
import MenuBar from '../shared/MenuBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AboutStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false
        headerStyle: {
          backgroundColor: "#AEDFE1",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
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