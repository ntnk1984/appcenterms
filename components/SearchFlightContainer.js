import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const SearchFlightContainer = () => {
  return (
    <View style={styles.group4}>
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
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
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
  group4: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SearchFlightContainer;
