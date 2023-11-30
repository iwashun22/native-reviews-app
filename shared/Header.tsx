import React from 'react';
import { View, Text, StyleSheet, NativeModules, Platform, Image, ImageBackground } from 'react-native';

import MenuBar from './MenuBar';
import { getHeaderTitle } from '@react-navigation/elements';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

export function Header({ route, options } : NativeStackHeaderProps) {
  const title = getHeaderTitle(options, route.name);
  return (
    <ImageBackground 
      source={require("../assets/images/game-bg.png")} 
      style={styles.header}
    >
      <MenuBar/>
      <HeaderTitle children={title}/>
    </ImageBackground>
  )
}

export default function HeaderTitle({ children, tintColor }: { 
  children: string, 
  tintColor?: string | undefined
}) {
  // const title = getHeaderTitle(options, route.name);
  // const onPress = useCallback(() => {
    // navigation.openDrawer()
  // }, []);
  return (
    <View style={styles.headerContent}>
      <Image 
        source={require("../assets/images/game-logo.png")}
        style={styles.headerImage}
      />
      <Text style={[
        styles.headerText,
        { color: tintColor ? tintColor : "#fff" },
      ]}>{children}</Text>
    </View>
  )
}

function getStatusBarHeight() {
  return Platform.OS === "ios" ? 20 : NativeModules.StatusBarManager.HEIGHT;
}
const h = getStatusBarHeight();
const styles = StyleSheet.create({
  header: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: 'Agbalumo',
    fontSize: 20,
    letterSpacing: 1
  },
  headerImage: {
    width: 28,
    height: 28,
    marginRight: 8
  }
});