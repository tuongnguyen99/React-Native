import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default CategoryPickerItem;
