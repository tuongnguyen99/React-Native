import React from 'react';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import { StyleSheet } from 'react-native';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationScheme = Yup.object().shape({
  title: Yup.string().min(1).required(),
  price: Yup.number().min(1).max(10000),
  category: Yup.object().required().nullable(),
  description: Yup.string(),
});

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
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
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width={120}
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder={categories[0].label}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          width={200}
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
    paddingHorizontal: 10,
  },
});

export default ListingEditScreen;
