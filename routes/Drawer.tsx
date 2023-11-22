import { ReactElement } from "react"; 
import { createDrawerNavigator } from "@react-navigation/drawer";

import { drawerPages, DrawerPagesParamList } from "./pages";

const RootDrawer = createDrawerNavigator<DrawerPagesParamList>();

function DrawerNavigator(): ReactElement {
  return (
    <RootDrawer.Navigator
      initialRouteName={drawerPages.home.name}
    >
      <RootDrawer.Screen 
        name={drawerPages.home.name} 
        component={drawerPages.home.Component}
        options={{
          title: "Home"
        }}
      />
      <RootDrawer.Screen 
        name={drawerPages.about.name} 
        component={drawerPages.about.Component}
        options={{
          title: "About"
        }}
      />
    </RootDrawer.Navigator>
  )
}

export default DrawerNavigator;