import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import {
  Margin,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Color,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FlightCardHolder = ({
  estimatedTime,
  estimatedTimeImageUrl,
  estimatedPrice,
  propColor,
  propColor1,
  propFontWeight,
  propWidth,
  propPaddingVertical,
  propFontWeight1,
}) => {
  const businessClassStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const fromStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
      ...getStyleValue("fontWeight", propFontWeight),
    };
  }, [propColor1, propFontWeight]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const buttonPrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingVertical", propPaddingVertical),
    };
  }, [propPaddingVertical]);

  const viewDetailsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight1),
    };
  }, [propFontWeight1]);

  return (
    <View style={styles.flightCardHolder}>
      <View style={styles.flightCard}>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.parentFlexBox}>
            <View style={styles.groupChildLayout}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Image
                style={styles.image3Icon}
                resizeMode="cover"
                source={require("../assets/image-3.png")}
              />
            </View>
            <Text style={[styles.asianaAirlines, styles.ml8, styles.sinTypo]}>
              Asiana Airlines
            </Text>
          </View>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.fluenttimer24RegularIcon}
              resizeMode="cover"
              source={require("../assets/fluenttimer24regular1.png")}
            />
            <Text style={[styles.hr38min, styles.ml4, styles.fromTypo]}>
              {estimatedTime}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.group13Parent,
            styles.mt14,
            styles.frameSpaceBlock,
            styles.parentFlexBox,
          ]}
        >
          <View>
            <Text style={[styles.sin, styles.sinTypo]}>SIN</Text>
            <Text style={[styles.singapore, styles.mt4, styles.sinTypo]}>
              Singapore
            </Text>
          </View>
          <View
            style={[styles.line2Parent, styles.ml18, styles.frameParentFlexBox]}
          >
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
              source={estimatedTimeImageUrl}
            />
            <Image
              style={[styles.ovalIcon1, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval1.png")}
            />
          </View>
          <View style={[styles.group131, styles.ml18]}>
            <Text style={[styles.sin, styles.sinTypo]}>LAX</Text>
            <Text style={[styles.singapore, styles.mt4, styles.sinTypo]}>
              Los Angeles
            </Text>
          </View>
        </View>
        <Image
          style={[styles.line3Icon, styles.mt14, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/line3.png")}
        />
        <View style={[styles.frameGroup, styles.mt14, styles.frameSpaceBlock]}>
          <View
            style={[
              styles.frameContainer,
              styles.frameSpaceBlock,
              styles.frameParentFlexBox,
            ]}
          >
            <View style={styles.chairParent}>
              <Image
                style={styles.chairIcon}
                resizeMode="cover"
                source={require("../assets/chair.png")}
              />
              <Text
                style={[
                  styles.businessClass,
                  styles.ml8,
                  styles.fromTypo,
                  businessClassStyle,
                ]}
              >
                Business Class
              </Text>
            </View>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.from, styles.fromTypo, fromStyle]}>
                From
              </Text>
              <Text
                style={[styles.text, styles.ml4, styles.textTypo, textStyle]}
              >
                {estimatedPrice}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.buttonPrimary,
              styles.mt10,
              styles.parentFlexBox,
              buttonPrimaryStyle,
            ]}
          >
            <Text
              style={[styles.viewDetails, styles.textTypo, viewDetailsStyle]}
            >
              View Details
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml18: {
    marginLeft: Margin.m_2xl,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  groupChildLayout: {
    height: 32,
    width: 48,
  },
  sinTypo: {
    fontFamily: FontFamily.inter,
    textAlign: "left",
  },
  fromTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inter,
    lineHeight: 16,
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    alignItems: "center",
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
  textTypo: {
    fontWeight: "600",
    lineHeight: 24,
    fontFamily: FontFamily.inter,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  image3Icon: {
    top: 9,
    left: 6,
    width: 36,
    height: 15,
    position: "absolute",
  },
  asianaAirlines: {
    textAlign: "left",
    color: Color.lightslategray,
    lineHeight: 16,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  hr38min: {
    textAlign: "right",
    color: Color.lightslategray,
  },
  frameParent: {
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_sm,
    alignSelf: "stretch",
  },
  sin: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    color: Color.cornflowerblue,
    textAlign: "left",
  },
  singapore: {
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_base,
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
  },
  group131: {
    alignItems: "flex-end",
  },
  group13Parent: {
    paddingVertical: 0,
  },
  line3Icon: {
    height: 1,
    width: "100%",
    alignSelf: "stretch",
  },
  chairIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  businessClass: {
    width: 85,
    color: Color.black,
    textAlign: "left",
  },
  chairParent: {
    flexDirection: "row",
  },
  from: {
    color: Color.silver,
    width: 32,
    textAlign: "right",
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "right",
  },
  frameContainer: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_2xs,
  },
  viewDetails: {
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
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameGroup: {
    paddingBottom: Padding.p_sm,
  },
  flightCard: {
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
  flightCardHolder: {
    paddingBottom: Padding.p_2xs,
    alignSelf: "stretch",
  },
});

export default FlightCardHolder;
