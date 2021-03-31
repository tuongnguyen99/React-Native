import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListItem({ image, title, subTitle, ImageComponent, showChevrons = false, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={"#eee"}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image} resizeMode="cover" />}
          <View style={styles.detailsContainer}>
            <Text style={styles.tilte} numberOfLines={1}>{title}</Text>
            {subTitle && <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
          </View>
          {showChevrons && <MaterialCommunityIcons name="chevron-right" color={colors.medium} size={18}/>}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subTitle :{
    color :"#ddd",
    fontSize: 14
  }
});
export default ListItem;
