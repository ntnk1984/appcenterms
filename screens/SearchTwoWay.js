import * as React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import SearchFlightContainer from "../components/SearchFlightContainer";
import OffersSection from "../components/OffersSection";
import {
  Margin,
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const SearchTwoWay = () => {
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon5, setOutlinedTextOnlyNoIcon5] =
    useState("Economy");

  return (
    <View style={styles.searchTwoWay}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <SearchFlightContainer />
      <View style={styles.flightSelectionParent}>
        <View style={[styles.flightSelection, styles.flightSelectionFlexBox]} />
        <OffersSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_sm,
  },
  mt18: {
    marginTop: Margin.m_2xl,
  },
  mt13: {
    marginTop: Margin.m_sm,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  flightSelectionFlexBox: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    width: 153,
    alignItems: "center",
    borderRadius: Border.br_4xl,
    paddingHorizontal: Padding.p_2xl,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  roundTripTypo: {
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  icons: {
    top: 18,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    top: "50%",
    left: 32,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 20,
    color: "#000",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "600",
    position: "absolute",
  },
  statusBarLight: {
    height: 44,
    width: 375,
    backgroundColor: Color.white,
  },
  flightSelection: {
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    padding: Padding.p_lg,
  },
  flightSelectionParent: {
    paddingVertical: Padding.p_3xl,
    paddingHorizontal: Padding.p_2xl,
    width: 375,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  searchTwoWay: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
});

export default SearchTwoWay;
