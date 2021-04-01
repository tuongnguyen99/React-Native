import React from 'react';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';
import routes from '../navigation/routes';

const { createStackNavigator } = require('@react-navigation/stack');

const Stack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
