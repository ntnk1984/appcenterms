import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const BoracayContainer = () => {
  return (
    <View style={styles.bottomDrawer}>
      <View style={styles.bottomDrawerContent}>
        <View style={[styles.title, styles.titleFlexBox]}>
          <View style={styles.frameParent}>
            <View>
              <Text style={[styles.boracay, styles.textClr, styles.textTypo]}>
                Boracay
              </Text>
              <Text style={[styles.philippines, styles.mt2]}>Philippines</Text>
            </View>
            <View style={[styles.d4nWrapper, styles.ml3]}>
              <Text style={styles.d4n}>5D4N</Text>
            </View>
          </View>
          <Text style={[styles.text, styles.textClr, styles.textTypo]}>
            $349
          </Text>
        </View>
        <View style={[styles.overviewText, styles.mt24]}>
          <Text
            style={[
              styles.overview,
              styles.photosLayout,
              styles.overviewPosition,
            ]}
          >
            Overview
          </Text>
          <Text
            style={[
              styles.spend5Days,
              styles.photosLayout,
              styles.overviewPosition,
            ]}
          >
            Spend 5 days and 4 nights in one of the best islands in the world!
            Bask in the sun while walking in the white sand beach and enjoy the
            night partying at the popular seaside bars.
          </Text>
        </View>
        <View style={[styles.images, styles.mt24]}>
          <Text style={[styles.photos, styles.photosLayout, styles.textClr]}>
            Photos
          </Text>
          <ScrollView
            style={[styles.photosRow, styles.mt8]}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.photosRowScrollViewContent}
          >
            <Image
              style={styles.photoIcon}
              resizeMode="cover"
              source={require("../assets/photo.png")}
            />
            <Image
              style={[styles.photoIcon, styles.ml10]}
              resizeMode="cover"
              source={require("../assets/photo1.png")}
            />
            <Image
              style={[styles.photoIcon, styles.ml10]}
              resizeMode="cover"
              source={require("../assets/photo2.png")}
            />
            <Image
              style={[styles.photoIcon, styles.ml10]}
              resizeMode="cover"
              source={require("../assets/photo3.png")}
            />
            <Image
              style={[styles.photoIcon, styles.ml10]}
              resizeMode="cover"
              source={require("../assets/photo4.png")}
            />
            <Image
              style={[styles.photoIcon, styles.ml10]}
              resizeMode="cover"
              source={require("../assets/photo5.png")}
            />
          </ScrollView>
        </View>
        <View style={[styles.buttonPrimary, styles.mt24, styles.titleFlexBox]}>
          <Text style={[styles.viewDetails, styles.photosLayout]}>
            Book Now
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: Margin.m_7xs,
  },
  ml3: {
    marginLeft: Margin.m_6xs,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  photosRowScrollViewContent: {
    flexDirection: "row",
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  mt24: {
    marginTop: Margin.m_5xl,
  },
  titleFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textClr: {
    color: Color.black,
    textAlign: "left",
  },
  textTypo: {
    fontWeight: "700",
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  photosLayout: {
    lineHeight: 24,
    fontFamily: FontFamily.inter,
  },
  overviewPosition: {
    position: "absolute",
    lineHeight: 24,
    textAlign: "left",
    color: Color.black,
  },
  boracay: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  philippines: {
    color: Color.lightslategray,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  d4n: {
    color: Color.dimgray_100,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  d4nWrapper: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.whitesmoke_200,
    overflow: "hidden",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_6xs,
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  title: {
    justifyContent: "space-between",
  },
  overview: {
    top: 0,
    left: 0,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  spend5Days: {
    top: "25%",
    left: "0%",
    width: "100%",
    fontSize: FontSize.size_base,
  },
  overviewText: {
    height: 128,
    alignSelf: "stretch",
  },
  photos: {
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  photoIcon: {
    borderRadius: Border.br_2xs,
    height: 90,
    width: 120,
  },
  photosRow: {
    width: "100%",
    alignSelf: "stretch",
  },
  images: {
    alignSelf: "stretch",
  },
  viewDetails: {
    color: Color.white,
    textAlign: "center",
    width: 120,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  buttonPrimary: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
  },
  bottomDrawerContent: {
    flex: 1,
  },
  bottomDrawer: {
    borderTopLeftRadius: Border.br_2xl,
    borderTopRightRadius: Border.br_2xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_4xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default BoracayContainer;
