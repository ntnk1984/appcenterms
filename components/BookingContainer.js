import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const BookingContainer = () => {
  return (
    <View style={[styles.bookingCard, styles.mt14]}>
      <Image
        style={[styles.bookingImageIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/booking-image.png")}
      />
      <View
        style={[
          styles.bookingDetails,
          styles.mt17,
          styles.buttonPrimaryFlexBox,
        ]}
      >
        <View style={[styles.group13Parent, styles.parentFlexBox]}>
          <View>
            <Text style={[styles.sin, styles.sinTypo]}>SIN</Text>
            <Text style={[styles.singapore, styles.mt6, styles.singaporeTypo]}>
              Singapore
            </Text>
            <Text style={[styles.terminal1, styles.mt6]}>Terminal 1</Text>
          </View>
          <View style={[styles.line2Parent, styles.ml18]}>
            <Image
              style={[styles.line2Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/line21.png")}
            />
            <Image
              style={[styles.ovalIcon, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval3.png")}
            />
            <Image
              style={styles.iconFlight}
              resizeMode="cover"
              source={require("../assets/icon--flight1.png")}
            />
            <Image
              style={[styles.ovalIcon1, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval3.png")}
            />
          </View>
          <View style={[styles.group131, styles.ml18]}>
            <Text style={[styles.sin, styles.sinTypo]}>LAX</Text>
            <Text style={[styles.singapore, styles.mt6, styles.singaporeTypo]}>
              Los Angeles
            </Text>
            <Text style={[styles.terminal1, styles.mt6]}>Terminal 4</Text>
          </View>
        </View>
        <View
          style={[styles.frameParent, styles.mt14, styles.frameParentFlexBox]}
        >
          <View style={styles.parentFlexBox}>
            <View style={styles.groupChildLayout}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Image
                style={styles.image2Icon}
                resizeMode="cover"
                source={require("../assets/image-2.png")}
              />
            </View>
            <Text
              style={[styles.unitedAirlines, styles.ml8, styles.hr40minLayout]}
            >
              United Airlines
            </Text>
          </View>
          <View
            style={[styles.fluenttimer24RegularParent, styles.parentFlexBox]}
          >
            <Image
              style={styles.fluenttimer24RegularIcon}
              resizeMode="cover"
              source={require("../assets/fluenttimer24regular.png")}
            />
            <Text style={[styles.hr40min, styles.ml4, styles.hr40minLayout]}>
              01 hr 40min
            </Text>
          </View>
        </View>
        <Text style={[styles.showMoreDetails, styles.mt14, styles.sinTypo]}>
          Show more details...
        </Text>
        <View
          style={[
            styles.bookingDetailsChild,
            styles.mt14,
            styles.frameParentFlexBox,
          ]}
        />
      </View>
      <View style={[styles.editButton, styles.mt17]}>
        <View
          style={[
            styles.buttonPrimary,
            styles.parentFlexBox,
            styles.buttonPrimaryFlexBox,
          ]}
        >
          <Text style={[styles.viewDetails, styles.singaporeTypo]}>
            Edit Booking
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: Margin.m_4xs,
  },
  ml18: {
    marginLeft: Margin.m_2xl,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  mt17: {
    marginTop: Margin.m_xl,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  buttonPrimaryFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  sinTypo: {
    color: Color.cornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  singaporeTypo: {
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
  },
  ovalIconLayout: {
    height: 10,
    width: 10,
  },
  frameParentFlexBox: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    borderRadius: Border.br_3xs,
    justifyContent: "space-between",
    alignItems: "center",
  },
  groupChildLayout: {
    height: 32,
    width: 48,
  },
  hr40minLayout: {
    lineHeight: 16,
    color: Color.lightslategray,
    fontFamily: FontFamily.inter,
  },
  bookingImageIcon: {
    height: 121,
    width: "100%",
    alignSelf: "stretch",
  },
  sin: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    textAlign: "left",
  },
  singapore: {
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  terminal1: {
    color: Color.lightslategray,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  line2Icon: {
    marginTop: -0.79,
    top: "50%",
    right: 8,
    left: 8,
    height: 2,
    zIndex: 0,
    position: "absolute",
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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  group131: {
    alignItems: "flex-end",
  },
  group13Parent: {
    alignSelf: "stretch",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xs,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    position: "absolute",
  },
  image2Icon: {
    top: 12,
    left: 5,
    width: 36,
    height: 8,
    position: "absolute",
  },
  unitedAirlines: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  hr40min: {
    fontSize: FontSize.size_xs,
    textAlign: "right",
  },
  fluenttimer24RegularParent: {
    justifyContent: "flex-end",
  },
  frameParent: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
  },
  showMoreDetails: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  bookingDetailsChild: {
    width: 323,
    height: 1,
  },
  bookingDetails: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_sm,
  },
  viewDetails: {
    lineHeight: 24,
    fontWeight: "600",
    color: Color.white,
    textAlign: "center",
    width: 120,
    fontSize: FontSize.size_base,
  },
  buttonPrimary: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xs,
  },
  editButton: {
    paddingBottom: Padding.p_sm,
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
  },
  bookingCard: {
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
});

export default BookingContainer;
