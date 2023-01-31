import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  Margin,
  FontFamily,
  Color,
  Padding,
  FontSize,
  Border,
} from "../GlobalStyles";

const UpcomingFlightsContainer = () => {
  return (
    <View style={styles.upcomingFlightsSection}>
      <Text
        style={[styles.upcomingFlight, styles.sinTypo, styles.singaporeClr]}
      >
        Upcoming Flight
      </Text>
      <View style={[styles.frameParent, styles.mt14]}>
        <View style={[styles.group13Parent, styles.parentSpaceBlock]}>
          <View>
            <Text style={[styles.sin, styles.sinTypo]}>SIN</Text>
            <Text
              style={[
                styles.singapore,
                styles.mt4,
                styles.sinTypo,
                styles.singaporeClr,
              ]}
            >
              Singapore
            </Text>
          </View>
          <View style={[styles.line2Parent, styles.ml18, styles.parentFlexBox]}>
            <Image
              style={[styles.line2Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/line2.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval1.png")}
            />
            <Image
              style={styles.iconFlight}
              resizeMode="cover"
              source={require("../assets/icon--flight.png")}
            />
            <Image
              style={[styles.ovalIcon1, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval1.png")}
            />
          </View>
          <View style={[styles.group131, styles.ml18]}>
            <Text style={[styles.sin, styles.sinTypo]}>LAX</Text>
            <Text
              style={[
                styles.singapore,
                styles.mt4,
                styles.sinTypo,
                styles.singaporeClr,
              ]}
            >
              Los Angeles
            </Text>
          </View>
        </View>
        <Image
          style={[styles.line3Icon, styles.mt16, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/line3.png")}
        />
        <View
          style={[
            styles.departsOn1May0800AmParent,
            styles.mt16,
            styles.parentFlexBox,
            styles.parentSpaceBlock,
          ]}
        >
          <Text style={[styles.departsOn1, styles.departsOn1Typo]}>
            Departs on: 1 May, 08:00 AM
          </Text>
          <Text style={styles.departsOn1Typo}>
            <Text style={styles.days}>4 days</Text>
            <Text style={styles.toGo}> to go</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml18: {
    marginLeft: Margin.m_2xl,
  },
  mt16: {
    marginTop: Margin.m_lg,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  sinTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  singaporeClr: {
    color: Color.black,
    textAlign: "left",
  },
  parentSpaceBlock: {
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  ovalIconLayout: {
    height: 10,
    width: 10,
  },
  departsOn1Typo: {
    color: Color.lightslategray,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  upcomingFlight: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
  },
  sin: {
    fontSize: FontSize.size_3xl,
    color: Color.cornflowerblue,
    fontWeight: "700",
  },
  singapore: {
    fontSize: FontSize.size_base,
  },
  line2Icon: {
    position: "absolute",
    marginTop: -0.79,
    top: "50%",
    right: 8,
    left: 8,
    height: 2,
    zIndex: 0,
  },
  ovalIcon: {
    zIndex: 1,
  },
  iconFlight: {
    width: 41,
    height: 41,
    zIndex: 2,
  },
  ovalIcon1: {
    zIndex: 3,
  },
  line2Parent: {
    flex: 1,
    alignItems: "center",
  },
  group131: {
    alignItems: "flex-end",
  },
  group13Parent: {
    paddingTop: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_sm,
  },
  line3Icon: {
    height: 1,
    width: "100%",
    alignSelf: "stretch",
  },
  departsOn1: {
    fontFamily: FontFamily.roboto,
  },
  days: {
    fontFamily: FontFamily.inter,
    fontWeight: "700",
  },
  toGo: {
    fontFamily: FontFamily.inter,
  },
  departsOn1May0800AmParent: {
    paddingBottom: Padding.p_sm,
  },
  frameParent: {
    borderRadius: Border.br_md,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  upcomingFlightsSection: {
    alignSelf: "stretch",
  },
});

export default UpcomingFlightsContainer;
