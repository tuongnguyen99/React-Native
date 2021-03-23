import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationScheme = Yup.object().shape({
  email: Yup.string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ")
    .label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        validationSchema={validationScheme}
      >
        <AppFormField
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="email"
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
