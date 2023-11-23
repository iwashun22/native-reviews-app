import { ReactElement } from "react"; 
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerPagesParamList } from "./drawerPages";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
// import Header from "../shared/Header";

const RootDrawer = createDrawerNavigator<DrawerPagesParamList>();

function DrawerNavigator(): ReactElement {
  return (
    <RootDrawer.Navigator
      initialRouteName="HomeDrawer"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootDrawer.Screen 
        name="HomeDrawer" 
        component={HomeStack}
        options={{
          title: "Home",
        }}
      />
      <RootDrawer.Screen 
        name="AboutDrawer"
        component={AboutStack}
        options={{
          title: "About"
        }}
      />
    </RootDrawer.Navigator>
  )
}

export default DrawerNavigator;