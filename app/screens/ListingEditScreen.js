import React from 'react';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import { StyleSheet } from 'react-native';

const validationScheme = Yup.object().shape({
  title: Yup.string().min(1).required(),
  price: Yup.number().min(1).max(10000),
  category: Yup.object().required().nullable(),
  description: Yup.string(),
});

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

const handleSubmit = (values) => {
  alert(values);
};

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: categories[0],
          description: '',
        }}
        validationSchema={validationScheme}
        onSubmit={handleSubmit}
      >
        <AppFormField name="title" placeholder="Title" />
        <AppFormField name="price" placeholder="Price" keyboardType="numeric" />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder={categories[0].label}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
})

export default ListingEditScreen;
