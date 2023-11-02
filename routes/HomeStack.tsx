import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { pages } from './pages';

const Stack = createNativeStackNavigator();

function HomeStack(): ReactElement {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name={pages.home.name} component={pages.home.component}/>
      <Stack.Screen name={pages.reviewDetails.name} component={pages.reviewDetails.component}/>
    </Stack.Navigator>
  )
}

export default HomeStack;