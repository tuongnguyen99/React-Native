import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../config/colors';

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="delete" color={colors.white} size={50} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
