import React, { ReactElement, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { globalStyles } from '../styles/global';

import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';

import { ReviewProps } from "./Home";

function ReviewDetails({ route, navigation }: {
  route: RouteProp<{ params: ReviewProps }>,
  navigation: NavigationProp<ParamListBase> 
}): ReactElement {
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