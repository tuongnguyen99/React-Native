import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../AppText";

function AppErrorMessage({ error, visible }) {
  if(!visible || !error) return null;
      return <AppText style={styles.text}>{error}</AppText>
 
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default AppErrorMessage;
