import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';

function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} 
        contentContainerStyle={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "#fff"
        }}
      >
        <View style={styles.drawerContainer}>
          <View style={styles.userAccountContainer}>
            <Image 
              source={require("../assets/images/avatar.png")} 
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
              }}
            />
            <View 
              style={{
                flex: 1, 
                alignItems: 'flex-start', 
                justifyContent: 'center',
                paddingLeft: 10
              }}
            >
              <Text style={styles.headerText}>Shun</Text>
              <Text numberOfLines={1}>shuntestmail@gmail.com</Text>
            </View>
          </View>
          <View style={styles.navigationContainer}>
            <DrawerItemList {...props}/>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContainer: {
    height: "100%",
  },
  userAccountContainer: {
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "row",
    padding: 12,
  },
  headerText: {
    fontFamily: 'Agbalumo',
    fontSize: 20,
  },
  navigationContainer: {

  }
});

export default DrawerContent;