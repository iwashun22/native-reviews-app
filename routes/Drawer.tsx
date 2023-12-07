import { ReactElement } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerPagesParamList } from './drawerPages';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
// import Header from "../shared/Header";
import DrawerContent from '../components/DrawerContent';
import MenuBar from '../shared/MenuBar';
import HeaderTitle from '../shared/Header';
import HeaderBackground from '../shared/HeaderBackground';

const RootDrawer = createDrawerNavigator<DrawerPagesParamList>();

function DrawerNavigator(): ReactElement {
  return (
    <RootDrawer.Navigator
      initialRouteName="HomeDrawer"
      screenOptions={{
        headerShown: false, // memo: Toggle this to display drawer header 
        drawerType: "slide",
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        // headerTitleStyle: {
        //   fontFamily: 'Agbalumo',
        //   fontSize: 22
        // },
        headerTitle: HeaderTitle,
        headerBackground: HeaderBackground,
        headerLeft: () => <MenuBar />,
        headerLeftContainerStyle: {
          paddingLeft: 14
        }
      }}
      drawerContent={DrawerContent}
    >
      <RootDrawer.Screen 
        name="HomeDrawer"
        component={HomeStack}
        options={{
          title: "GameZone",
          drawerLabel: "Home",
        }}
      />
      <RootDrawer.Screen 
        name="AboutDrawer"
        component={AboutStack}
        options={{
          title: "About GameZone",
          drawerLabel: "About",
        }}
      />
    </RootDrawer.Navigator>
  )
}

export default DrawerNavigator;