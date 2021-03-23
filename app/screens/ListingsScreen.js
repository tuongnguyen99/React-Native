import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const items = [
  {
    _id: 1,
    title: "red jacket for sale",
    price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    _id: 2,
    title: "Couch in great condition",
    price: "$999",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => {
          return item._id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <Card title={item.title} subTitle={item.price} image={item.image} />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    }
})

export default ListingsScreen;
