import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons size={size} color={color} name="home" />
            );
          },
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => {
          return {
            tabBarButton: () => {
              return (
                <NewListingButton
                  onPress={() => {
                    navigation.navigate('ListingEdit');
                  }}
                />
              );
            },
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  size={size}
                  color={color}
                  name="plus-circle"
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                size={size}
                color={color}
                name="account"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
