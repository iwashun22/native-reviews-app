import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Home(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: 'Agbalumo'
  }
});

export default Home;