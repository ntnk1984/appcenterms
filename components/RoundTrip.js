import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const RoundTrip = ({ style }) => {
  return (
    <View style={[styles.roundTrip, style]}>
      <Text style={styles.roundTrip1}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTrip1: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.roboto,
    color: Color.darkgray_100,
    textAlign: "center",
  },
  roundTrip: {
    flex: 1,
    borderRadius: Border.br_4xl,
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundTrip;
