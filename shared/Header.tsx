import React from 'react';
import { View, Text, StyleSheet, NativeModules, Platform, Image } from 'react-native';

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