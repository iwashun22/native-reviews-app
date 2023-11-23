import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { pages } from './pages';
import type { RootStackParamList } from './pages';

// import Header from '../shared/Header';
import MenuBar from '../shared/MenuBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AboutStack(): ReactElement {
  const navigation = useNavigation();
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