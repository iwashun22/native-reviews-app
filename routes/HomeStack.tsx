import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { pages } from './pages';
import type { RootStackParamList } from './pages';

// import Header from '../shared/Header';
import MenuBar from '../shared/MenuBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack(): ReactElement {
  const navigation = useNavigation();
  return (
    <Stack.Navigator 
      initialRouteName={pages.home.name}
      screenOptions={{
        // headerShown: false
        headerStyle: {
          backgroundColor: "#0163d2"
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
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
          title: "Review Details"
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack;