import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      blurRadius={1}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Want</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" color="primary" />
        <AppButton title="resgister" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  logoContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  tagline: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 18,
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
  },
  loginButton: {
    height: 60,
    backgroundColor: colors.primary,
  },
  registerButton: {
    height: 60,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
