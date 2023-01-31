import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import DestinationCard from "../components/DestinationCard";
import {
  Margin,
  FontSize,
  FontFamily,
  Padding,
  Color,
  Border,
} from "../GlobalStyles";

const TrendingDestinationsContainer = () => {
  return (
    <View style={[styles.trendingDestinations, styles.mt30]}>
      <View style={styles.detailsFlexBox}>
        <Text style={styles.trendingDestinations1}>Trending Destinations</Text>
        <Text style={[styles.seeAll, styles.barosTypo]}>See all</Text>
      </View>
      <ScrollView
        style={[styles.trendingCardsView, styles.mt14]}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.trendingCardsViewContent}
      >
        <View style={styles.trandingCardsRow}>
          <DestinationCard
            destinationTitle="Boracay"
            destinationImage={require("../assets/destination-image.png")}
            destinationDetail="Philippines"
            destinationDuration="5D4N"
          />
          <View
            style={[
              styles.destinationCard,
              styles.ml10,
              styles.destinationCardShadowBox,
            ]}
          >
            <Image
              style={styles.destinationImageIcon}
              resizeMode="cover"
              source={require("../assets/destination-image1.png")}
            />
            <View style={[styles.details, styles.mt10, styles.detailsFlexBox]}>
              <View>
                <Text style={[styles.baros, styles.barosTypo]}>Baros</Text>
                <Text style={[styles.maldives, styles.mt1, styles.d6nTypo]}>
                  Maldives
                </Text>
              </View>
              <View style={styles.duration}>
                <Text style={[styles.d6n, styles.d6nTypo]}>7D6N</Text>
              </View>
            </View>
          </View>
          <View style={[styles.destinationCardShadowBox, styles.ml10]}>
            <Image
              style={styles.destinationImageIcon}
              resizeMode="cover"
              source={require("../assets/destination-image2.png")}
            />
            <View style={[styles.details, styles.mt10, styles.detailsFlexBox]}>
              <View>
                <Text style={[styles.baros, styles.barosTypo]}>Bali</Text>
                <Text style={[styles.maldives, styles.mt1, styles.d6nTypo]}>
                  Indonesia
                </Text>
              </View>
              <View style={styles.duration}>
                <Text style={[styles.d6n, styles.d6nTypo]}>3D2N</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.destinationCard,
              styles.ml10,
              styles.destinationCardShadowBox,
            ]}
          >
            <Image
              style={styles.destinationImageIcon}
              resizeMode="cover"
              source={require("../assets/destination-image3.png")}
            />
            <View style={[styles.details, styles.mt10, styles.detailsFlexBox]}>
              <View>
                <Text style={[styles.baros, styles.barosTypo]}>Palawan</Text>
                <Text style={[styles.maldives, styles.mt1, styles.d6nTypo]}>
                  Philippines
                </Text>
              </View>
              <View style={styles.duration}>
                <Text style={[styles.d6n, styles.d6nTypo]}>3D2N</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: Margin.m_8xs,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  trendingCardsViewContent: {
    flexDirection: "column",
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  barosTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  destinationCardShadowBox: {
    padding: Padding.p_xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.white,
    borderRadius: Border.br_md,
  },
  detailsFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  d6nTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  trendingDestinations1: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    color: Color.black,
  },
  seeAll: {
    color: Color.cornflowerblue,
  },
  destinationImageIcon: {
    borderRadius: Border.br_4xs,
    width: 131,
    height: 90,
  },
  baros: {
    fontWeight: "600",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  maldives: {
    color: Color.lightslategray,
  },
  d6n: {
    color: Color.dimgray_100,
  },
  duration: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    overflow: "hidden",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    flexDirection: "row",
  },
  details: {
    alignItems: "center",
  },
  destinationCard: {
    width: 151,
  },
  trandingCardsRow: {
    flexDirection: "row",
  },
  trendingCardsView: {
    width: "100%",
    alignSelf: "stretch",
  },
  trendingDestinations: {
    alignSelf: "stretch",
  },
});

export default TrendingDestinationsContainer;
