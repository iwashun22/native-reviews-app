import { ReactElement } from "react"; 
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerPagesParamList } from "./drawerPages";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const RootDrawer = createDrawerNavigator<DrawerPagesParamList>();

function DrawerNavigator(): ReactElement {
  return (
    <RootDrawer.Navigator
      initialRouteName="HomeDrawer"
    >
      <RootDrawer.Screen 
        name="HomeDrawer" 
        component={HomeStack}
        options={{
          title: "Home"
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