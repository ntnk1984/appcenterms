import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent = ({ style }) => {
  return (
    <View style={[styles.oneWayParent, style]}>
      <Text style={styles.oneWay}>One way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneWay: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.roboto,
    color: Color.darkgray_100,
    textAlign: "center",
  },
  oneWayParent: {
    borderRadius: Border.br_4xl,
    width: 153,
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrameComponent;
