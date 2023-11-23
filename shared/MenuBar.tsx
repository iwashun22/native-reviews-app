import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

function MenuBar({ color }: { color?: string }) {
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [])
  return (
    <TouchableOpacity onPress={handlePress}>
      <MaterialIcons 
        name="menu" 
        size={30} 
        color={ color ? color : "#fff" }
      />
    </TouchableOpacity>
  )
}

export default MenuBar;