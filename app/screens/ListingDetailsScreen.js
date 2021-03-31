import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.subTitle}>$100</Text>
      </View>
      <ListItem image={require('../assets/tuong.jpg')} title="Tuong Nguyen" subTitle="9 Listings"/>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    color: "coral",
  },
});

export default ListingDetailsScreen;
