import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
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

const ReviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test(
      'is-num-0-5',
      'Rating must be a number in range of 0 to 5',
      (v) => {
        return 0 <= parseInt(v) && parseInt(v) <= 5
      })
})

function ReviewForm({ addReview }: {
  addReview: (review: ReviewProps) => unknown,
}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          const ratingInt = Math.round(Number(values.rating));
          if( !(0 <= ratingInt && ratingInt <= 5) ) {
            
          }
          const newReview: ReviewProps = {
            ...values,
            rating: Number(values.rating),
            key: (Math.random() * Date.now()).toString(16)
          }
          addReview(newReview);
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
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={globalStyles.errorMessage}>
              { formikProps.touched.title && formikProps.errors.title }
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={
                formikProps.handleChange<keyof FormReviewProps>("body")
              }
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={globalStyles.errorMessage}>
              { formikProps.touched.body && formikProps.errors.body }
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={
                formikProps.handleChange<keyof FormReviewProps>("rating")
              }
              value={formikProps.values.rating.toString()}
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={globalStyles.errorMessage}>
              { formikProps.touched.rating && formikProps.errors.rating }
            </Text>
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