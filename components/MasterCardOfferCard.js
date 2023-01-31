import * as React from "react";
import { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import {
  Margin,
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MasterCardOfferCard = ({
  discountImageUrl,
  discountText,
  creditCardType,
  discountImageUrl2,
  mastercardDiscountText,
  visaDiscountImageUrl,
  propMarginTop,
  propTop,
  propHeight,
}) => {
  const offerCardStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const image7IconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propHeight]);

  return (
    <View style={[styles.offerCard, offerCardStyle]}>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={[styles.limitedOfferWrapper, styles.frameFlexBox]}>
          <Text style={[styles.limitedOffer, styles.textTypo]}>
            Limited offer!
          </Text>
        </View>
        <Image
          style={styles.iconHeart}
          resizeMode="cover"
          source={discountImageUrl}
        />
      </View>
      <Text
        style={[
          styles.get20DiscountContainer,
          styles.mt7,
          styles.useYourMastercardFlexBox,
        ]}
      >
        <Text style={styles.get20Discount}>{discountText}</Text>
        <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
        <Text style={styles.withYourMaster}>{creditCardType}</Text>
      </Text>
      <View style={[styles.frameGroup, styles.mt7, styles.frameFlexBox]}>
        <View style={styles.image7Wrapper}>
          <Image
            style={[styles.image7Icon, image7IconStyle]}
            resizeMode="cover"
            source={discountImageUrl2}
          />
        </View>
        <View style={[styles.useYourMastercardWithAnyTWrapper, styles.ml16]}>
          <Text
            style={[styles.useYourMastercard, styles.useYourMastercardFlexBox]}
          >
            {mastercardDiscountText}
          </Text>
        </View>
        <Image
          style={[styles.frameChild, styles.ml16]}
          resizeMode="cover"
          source={visaDiscountImageUrl}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt7: {
    marginTop: Margin.m_3xs,
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
  },
  useYourMastercardFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  limitedOffer: {
    fontSize: FontSize.size_sm,
    textTransform: "uppercase",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    lineHeight: 18,
  },
  limitedOfferWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.mediumaquamarine,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
  },
  iconHeart: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  frameParent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  get20Discount: {
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  text: {
    fontFamily: FontFamily.roboto,
  },
  withYourMaster: {
    fontFamily: FontFamily.roboto,
  },
  get20DiscountContainer: {
    fontSize: FontSize.size_2xl,
    lineHeight: 24,
    color: Color.black,
  },
  image7Icon: {
    position: "absolute",
    top: 1,
    left: 0,
    height: 71,
    width: 104,
  },
  image7Wrapper: {
    height: 72,
    width: 104,
  },
  useYourMastercard: {
    fontSize: FontSize.size_xs,
    color: Color.lightslategray,
    fontFamily: FontFamily.roboto,
    lineHeight: 18,
  },
  useYourMastercardWithAnyTWrapper: {
    flex: 1,
  },
  frameChild: {
    width: 7,
    height: 11,
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  offerCard: {
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
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_md,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default MasterCardOfferCard;
