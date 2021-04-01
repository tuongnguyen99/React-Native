import React, { useEffect, useState } from 'react';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import Screen from './app/components/Screen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/AccountScreen';
import ViewImageSceen from './app/screens/ViewImageSceen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import TestScreen from './app/screens/TestScreen';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, Text } from 'react-native';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WelcomeScreen from './app/screens/WelcomeScreen';
import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={ListingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons size={size} color={color} name="home" />
            );
          },
        }}
      />
      <Tab.Screen name="Add" component={ListingEditScreen} />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
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

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <TabNavigator /> */}
      <AppNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
