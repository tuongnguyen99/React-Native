import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} resizeMode="cover" />

      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.subTitle} numberOfLines={1}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    margin: 20,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 6,
    fontWeight: "bold",
  },
  subTitle: {
    color: "coral",
  },
});

export default Card;
