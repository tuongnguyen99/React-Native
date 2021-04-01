import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';

const items = [
  {
    _id: 1,
    title: 'red jacket for sale',
    price: '$100',
    image: require('../assets/jacket.jpg'),
  },
  {
    _id: 2,
    title: 'Couch in great condition',
    price: '$999',
    image: require('../assets/couch.jpg'),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => {
          return item._id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              subTitle={item.price}
              image={item.image}
              onPress={() => {
                navigation.navigate(routes.LISTING_DETAILS, item);
              }}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
