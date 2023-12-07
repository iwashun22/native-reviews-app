import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

import { ReviewProps } from '../screens/ReviewDetails';

type RemoveKey<T> = {
  [Key in keyof T as Key extends "key" ? never : Key]: T[Key]
}
type FormReviewProps = RemoveKey<ReviewProps>;
const initialValues: FormReviewProps = {
  title: '',
  body: '',
  rating: 0,
}

function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={
                formikProps.handleChange<keyof FormReviewProps>("title")
              }
              value={formikProps.values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={
                formikProps.handleChange<keyof FormReviewProps>("body")
              }
              value={formikProps.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={
                formikProps.handleChange<keyof FormReviewProps>("rating")
              }
              value={formikProps.values.rating.toString()}
            />
            <Button 
              title="submit"
              onPress={() => formikProps.handleSubmit()}
              color="maroon"
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ReviewForm;