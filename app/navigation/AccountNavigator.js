import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from "../navigation/routes";
const { createStackNavigator } = require('@react-navigation/stack');

const Stack = createStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
      <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
