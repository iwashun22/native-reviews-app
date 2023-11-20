import React, { ReactElement, useCallback, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { PagesName } from '../routes/pages';

type Navigator = NavigationProp<ParamListBase>;
export interface ReviewProps {
  title: string,
  rating: number,
  body: string,
  key: string
}

function Home({ navigation }: { navigation: Navigator}): ReactElement {
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
            navigation.navigate<PagesName>("ReviewDetails", item);
          }}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home;