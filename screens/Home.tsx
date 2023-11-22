import React, { ReactElement, useCallback, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

import type { ReviewProps } from './ReviewDetails';
import type { PageProps } from '../routes/pages';

function Home({ navigation }: PageProps<"HomePage">): ReactElement {
  const [reviews, setReviews] = useState<Array<ReviewProps>>([
    { title: "Zelda", rating: 5, body: "lorem ipsum", key: '1' },
    { title: "Mario", rating: 4, body: "lorem ipsum", key: '2'},
    { title: "Kirby", rating: 3, body: "lorem ipsum", key: '3'}
  ])
  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button title="go to review dets" onPress={navigateReview}/> */}
      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            // memo: passing data to the navigated page 
            navigation.navigate("ReviewDetailsPage", item);
          }}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home;