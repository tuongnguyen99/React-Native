import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import * as Yup from 'yup';
import Screen from '../components/Screen';

const validationScheme = Yup.object().shape({
  name: Yup.string().min(1).required(),
});

const handleSubmit = (values) => {};

function TestScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm initialValues={{ name: '' }} validationSchema={validationScheme}>
        <AppFormField
          name="name"
          icon="account"
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SubmitButton title="register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default TestScreen;
