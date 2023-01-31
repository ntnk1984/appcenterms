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

const BottomTab = ({ style }) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconItinerary}
        resizeMode="cover"
        source={require("../assets/icon--itinerary1.png")}
      />
      <Text style={[styles.search, styles.mt14]}>Bookings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: Margin.m_md,
  },
  iconItinerary: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  bottomTab: {
    width: 61,
    alignItems: "center",
  },
});

export default BottomTab;
