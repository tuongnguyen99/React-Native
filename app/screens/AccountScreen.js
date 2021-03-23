import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Tuong Nguyen"
          subTitle="nctuong99@gmail.com"
          image={require("../assets/tuong.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => {
            return menuItem.title;
          }}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                ImageComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            );
          }}
          ItemSeparatorComponent={Separator}
        />
      </View>
      <ListItem title="Log Out" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
screen:{
    backgroundColor: colors.light
},
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
