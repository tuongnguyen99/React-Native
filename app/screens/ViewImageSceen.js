import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

function ViewImageSceen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.closeButton} activeOpacity={0.6}>
          <MaterialCommunityIcons name="close" size={40} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} activeOpacity={0.6}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={40}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/chair.jpg")}
          style={styles.image}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  closeButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: { flex: 1 },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ViewImageSceen;
