import React, { useState } from "react";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/AccountScreen";
import ViewImageSceen from "./app/screens/ViewImageSceen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import TestScreen from "./app/screens/TestScreen";


export default function App() {
  const [category, setCategory] = useState();
  return (
    <MessagesScreen
     />
  );
}
