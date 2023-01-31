import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

const BottomTab7 = ({ style }) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconExploreSelected}
        resizeMode="cover"
        source={require("../assets/icon--exploreselected6.png")}
      />
      <Text style={[styles.search, styles.mt14]}>Explore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: Margin.m_md,
  },
  iconExploreSelected: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    color: Color.lightslategray,
    textAlign: "center",
  },
  bottomTab: {
    width: 61,
    alignItems: "center",
  },
});

export default BottomTab7;
