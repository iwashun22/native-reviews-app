import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { globalStyles } from '../styles/global';

function ReviewDetails(): ReactElement {
  return (
    <View style={globalStyles.container}>
      <Text>Reviews</Text>
    </View>
  )
}

export default ReviewDetails;