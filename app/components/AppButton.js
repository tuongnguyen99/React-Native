import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({ title, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    padding: 14,
    marginBottom: 20,
    backgroundColor: 'red',
  },
  title: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 18,
  },
});

export default AppButton;
