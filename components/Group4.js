import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Margin, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Group41 = ({ style }) => {
  return (
    <SafeAreaView style={[styles.group4, style]}>
      <View style={styles.view}>
        <Image
          style={styles.iconBack}
          resizeMode="cover"
          source={require("../assets/icon--back.png")}
        />
        <View style={styles.searchFlightWrapper}>
          <Text style={styles.searchFlight}>Search Flight</Text>
        </View>
        <View style={styles.iconBack}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.frameChild, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.frameChild, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  group4: {
    backgroundColor: Color.white,
  },
  iconBack: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  searchFlight: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    color: Color.black,
    textAlign: "left",
  },
  searchFlightWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    width: 5,
    height: 5,
  },
  ellipseParent: {
    position: "absolute",
    top: 5,
    left: 14,
  },
  view: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Group41;
