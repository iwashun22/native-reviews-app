import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { pages } from './pages';
import type { RootStackParamList } from './pages';

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack(): ReactElement {
  return (
    <Stack.Navigator 
      initialRouteName={pages.home.name}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ccc",
        },
        headerTintColor: "#444"
      }}
    >
      <Stack.Screen 
        name={pages.home.name} 
        component={pages.home.Component}
        options={{
          title: "GameZone",
          headerStyle: {
            backgroundColor: "#AEDFE1"
          }
        }}
      />
      <Stack.Screen 
        name={pages.reviewDetails.name} 
        component={pages.reviewDetails.Component}
        options={{
          title: "Review Details"
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack;