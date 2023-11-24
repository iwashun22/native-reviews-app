import React, { ReactElement, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card';

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
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.ratingContent}>
          <Text style={styles.ratingText}>GameZone rating: </Text>
          <DisplayRatingStars rating={rating} maxRating={5}/>
        </View>
      </Card>
      <Button title='back to home screen' onPress={goBack}/>
    </View>
  )
}

function DisplayRatingStars({ rating=0, maxRating=5 }: {
  rating?: number,
  maxRating?: number
}) {
  const arr = new Array(maxRating).fill(0);
  rating = Math.round(rating);
  maxRating = Math.round(maxRating);
  arr.fill(1, 0, rating)
  return (
    <View style={styles.ratingStars}>
      {arr.map((i, index) => (
        <MaterialIcons
          key={index}
          name="star" 
          size={18} 
          color={ i ? "#F5DF00" : "#ddd" }
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  ratingContent: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderColor: "#eee"
  },
  ratingText: {
    flex: 1,
    color: "#777",
    fontSize: 12,
  },
  ratingStars: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default ReviewDetails;