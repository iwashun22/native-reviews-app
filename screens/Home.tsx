import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

function Home(): ReactElement {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  )
}

export default Home;