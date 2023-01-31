import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent1 = ({ style }) => {
  return (
    <View style={[styles.roundTripParent, style]}>
      <Text style={styles.roundTrip}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTrip: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    color: Color.white,
    textAlign: "center",
  },
  roundTripParent: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.cornflowerblue,
    width: 153,
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrameComponent1;
