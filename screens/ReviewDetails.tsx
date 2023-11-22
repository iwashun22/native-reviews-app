import React, { ReactElement, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { globalStyles } from '../styles/global';

import type { PageProps } from '../routes/pages';

export interface ReviewProps {
  title: string,
  rating: number,
  body: string,
  key: string
}

function ReviewDetails({ route, navigation }: PageProps<"ReviewDetailsPage">): ReactElement {
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const { title, body, rating, key } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      <Button title='back to home screen' onPress={goBack}/>
    </View>
  )
}

export default ReviewDetails;