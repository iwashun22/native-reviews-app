import React from 'react';
import { Image } from 'react-native';

function HeaderBackground() {
  return (
    <Image 
      source={require("../assets/images/game-bg.png")}
      style={{
        height: 80,
        width: 'auto',
      }}
    />
  )
}

export default HeaderBackground;