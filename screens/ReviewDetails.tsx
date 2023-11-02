import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ReviewDetails(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
});

export default ReviewDetails;