import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, View } from 'react-native';
import {
  FlatList,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  items,
  selectedItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  width = '100%',
  onSelectItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.placeholder}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
          numColumns={numberOfColumns}
          renderItem={({ item }) => {
            return (
              <PickerItemComponent
                item={item}
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
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    margin: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
});

export default AppPicker;
