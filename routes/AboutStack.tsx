import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { pages } from './pages';
import type { RootStackParamList } from './pages';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AboutStack(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={pages.about.name} 
        component={pages.about.Component}
        options={{
          title: "About GameZone",
          headerStyle: {
            backgroundColor: "#AEDFE1"
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default AboutStack;