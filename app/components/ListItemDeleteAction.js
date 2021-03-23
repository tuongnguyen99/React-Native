import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
        <MaterialCommunityIcons name="delete" color={colors.white} size={50} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
