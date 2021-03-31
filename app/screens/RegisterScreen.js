import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import * as Yup from 'yup';
import Screen from '../components/Screen';

const validationScheme = Yup.object().shape({
  name: Yup.string().min(1).required(),
  email: Yup.string()
    .required('Vui lòng nhập email')
    .email('Email không hợp lệ')
    .label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const handleSubmit = (values) => {};

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationScheme}
      >
        <AppFormField
          name="name"
          icon="account"
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
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

export default RegisterScreen;
