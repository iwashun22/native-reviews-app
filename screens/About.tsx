import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { globalStyles } from '../styles/global';

function About(): ReactElement {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
    </View>
  )
}

export default About;