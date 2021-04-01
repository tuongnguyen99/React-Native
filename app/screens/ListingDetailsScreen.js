import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>${listing.price}</Text>
      </View>
      <ListItem
        image={require('../assets/tuong.jpg')}
        title="Tuong Nguyen"
        subTitle="9 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    color: 'coral',
  },
});

export default ListingDetailsScreen;
