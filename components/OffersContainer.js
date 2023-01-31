import * as React from "react";
import { useMemo } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Margin, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const OffersContainer = ({ carImageUrl, vehicleImageUrl, propMarginTop }) => {
  const offersSectionStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.offersSection, styles.mt30, offersSectionStyle]}>
      <Text style={styles.offers}>Offers</Text>
      <ScrollView
        style={[styles.offersRow, styles.mt14]}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.offersRowScrollViewContent}
      >
        <View style={styles.offerCard}>
          <View style={styles.offerDetails}>
            <Text
              style={[
                styles.discountForMastercardContainer,
                styles.limitedTimeOfferLayout,
              ]}
            >
              <Text style={styles.discount}>20% discount</Text>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.forMastercardUsers}>
                for mastercard users
              </Text>
            </Text>
            <Text
              style={[
                styles.limitedTimeOffer,
                styles.mt4,
                styles.limitedTimeOfferLayout,
              ]}
            >
              Limited time offer!
            </Text>
          </View>
          <Image
            style={styles.offerImageIcon}
            resizeMode="cover"
            source={carImageUrl}
          />
        </View>
        <View style={[styles.offerCard, styles.ml16]}>
          <View style={styles.offerDetails}>
            <Text
              style={[
                styles.discountForMastercardContainer,
                styles.limitedTimeOfferLayout,
              ]}
            >
              <Text style={styles.discount}>25% discount</Text>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.forMastercardUsers}>
                with your Visa credit cards
              </Text>
            </Text>
            <Text
              style={[
                styles.limitedTimeOffer,
                styles.mt4,
                styles.limitedTimeOfferLayout,
              ]}
            >
              Limited time offer!
            </Text>
          </View>
          <Image
            style={styles.offerImageIcon}
            resizeMode="cover"
            source={vehicleImageUrl}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  offersRowScrollViewContent: {
    flexDirection: "row",
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  limitedTimeOfferLayout: {
    width: 136,
    textAlign: "left",
  },
  offers: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  discount: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
  },
  forMastercardUsers: {
    fontFamily: FontFamily.roboto,
  },
  discountForMastercardContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 19,
    color: Color.black,
    width: 136,
  },
  limitedTimeOffer: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.gray999,
    fontFamily: FontFamily.roboto,
  },
  offerDetails: {
    top: 13,
    left: 112,
    position: "absolute",
  },
  offerImageIcon: {
    top: 17,
    left: 15,
    width: 74,
    height: 51,
    position: "absolute",
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
    width: 264,
    height: 86,
  },
  offersRow: {
    width: "100%",
    alignSelf: "stretch",
  },
  offersSection: {
    alignSelf: "stretch",
  },
});

export default OffersContainer;
