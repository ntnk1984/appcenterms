import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
} from "react-native";
import DiscountContainer from "../components/DiscountContainer";
import { Margin, FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const Offers = () => {
  return (
    <View style={styles.offers}>
      <StatusBar barStyle="default" />
      <View style={styles.offersBody}>
        <DiscountContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  header: {
    backgroundColor: "#fff",
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  searchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_sm,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  offersBody: {
    paddingVertical: 19,
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  offers: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    flex: 1,
    width: "100%",
  },
});

export default Offers;
