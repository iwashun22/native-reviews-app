import React, { ReactElement, useState, useCallback } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card';
import ReviewForm from '../components/ReviewForm';
import { globalStyles } from '../styles/global';

import type { ReviewProps } from './ReviewDetails';
import type { PageProps } from '../routes/pages';

function Home({ navigation }: PageProps<"HomePage">): ReactElement {
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState<Array<ReviewProps>>([
    { title: "Zelda", rating: 5, body: "lorem ipsum", key: '1' },
    { title: "Mario", rating: 4, body: "lorem ipsum", key: '2'},
    { title: "Kirby", rating: 3, body: "lorem ipsum", key: '3'}
  ])
  const addReview = useCallback((review: ReviewProps) => {
    setReviews((currentReviews) => {
      return [ ...currentReviews, review ]
    });
    setShowModal(false);
  }, []);
  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button title="go to review dets" onPress={navigateReview}/> */}
      <Modal visible={showModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name="close"
              size={24}
              onPress={() => setShowModal(false)}
              style={[
                styles.modalToggle,
                styles.modalClose
              ]}
            />
            <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name="add"
        size={24}
        onPress={() => setShowModal(true)}
        style={styles.modalToggle}
      />

      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            // memo: passing data to the navigated page 
            navigation.navigate("ReviewDetailsPage", item);
          }}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }
})

export default Home;