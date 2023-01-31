import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

const MenuItem2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() => navigation.navigate("Borocay")}
    >
      <Image
        style={styles.iconlylightnotification}
        resizeMode="cover"
        source={require("../assets/iconlylightnotification.png")}
      />
      <Text style={[styles.favourites, styles.ml16]}>Favourites</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_lg,
  },
  iconlylightnotification: {
    width: 24,
    height: 24,
  },
  favourites: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    color: Color.black,
    textAlign: "left",
  },
  menuItem: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default MenuItem2;
