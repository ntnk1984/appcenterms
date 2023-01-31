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

const MenuItem1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Profile" })
      }
    >
      <Image
        style={styles.iconlylightprofile}
        resizeMode="cover"
        source={require("../assets/iconlylightprofile.png")}
      />
      <Text style={[styles.profile, styles.ml16]}>Profile</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_lg,
  },
  iconlylightprofile: {
    width: 24,
    height: 24,
  },
  profile: {
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

export default MenuItem1;
