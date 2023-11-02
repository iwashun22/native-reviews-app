import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function About(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
});

export default About;