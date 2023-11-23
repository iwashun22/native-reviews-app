import React, { useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet, NativeModules, Platform, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { getHeaderTitle } from "@react-navigation/elements";

import type { DrawerHeaderProps } from "@react-navigation/drawer";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function Header({ navigation, route, layout, options }: DrawerHeaderProps) {
  const title = getHeaderTitle(options, route.name);
  const onPress = useCallback(() => {
    navigation.openDrawer()
  }, []);
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <MaterialIcons name="menu" size={28}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

function getStatusBarHeight() {
  return Platform.OS === "ios" ? 20 : NativeModules.StatusBarManager.HEIGHT;
}
const h = getStatusBarHeight();
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingTop: h,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#333",
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 16,
    // bottom: 0
  }
});