import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import colors from "../config/colors";
import AppButton from "./AppButton";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, selectedItem, placeholder, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button
          title="Close"
          onPress={() => {
            setModalVisible(false);
          }}
        />
        <FlatList
          data={items}
          keyExtractor={(item) => {
            return item.value.toString();
          }}
          renderItem={({ item }) => {
            return (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            );
          }}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
