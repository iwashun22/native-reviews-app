import React, { JSX } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

function Card(props: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { props.children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3, // set distance between screen and card
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  }
})

export default Card;