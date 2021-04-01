import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
      <MaterialCommunityIcons
        name="plus-circle"
        color={colors.white}
        size={40}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 30,
    borderWidth: 10,
    borderColor: colors.white,
  },
});

export default NewListingButton;
