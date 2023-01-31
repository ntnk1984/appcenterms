import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  View,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UpcomingFlightsContainer from "../components/UpcomingFlightsContainer";
import TrendingDestinationsContainer from "../components/TrendingDestinationsContainer";
import OffersContainer from "../components/OffersContainer";
import {
  Margin,
  Padding,
  FontFamily,
  Color,
  FontSize,
  Border,
} from "../GlobalStyles";

const Explore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.explore}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.exploreMainView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.exploreMainViewContent}
      >
        <ImageBackground
          style={styles.parisCardIcon}
          resizeMode="cover"
          source={require("../assets/frame14.png")}
        >
          <View style={[styles.description, styles.viewFlexBox]}>
            <Text style={[styles.paris, styles.textTypo]}>Paris</Text>
            <View style={styles.fromParent}>
              <Text style={[styles.from, styles.fromTypo]}>FROM</Text>
              <Text style={[styles.text, styles.textTypo]}>$1299</Text>
            </View>
          </View>
          <Image
            style={[
              styles.heartIcon,
              styles.mt82,
              styles.iconLayout,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/heart.png")}
          />
        </ImageBackground>
        <View style={[styles.exploreContent, styles.mt20]}>
          <UpcomingFlightsContainer />
          <ScrollView
            style={[styles.categories, styles.mt30]}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScrollViewContent}
          >
            <View style={styles.categoryBlock}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--flight.png")}
              />
              <Text style={[styles.flight, styles.mt22, styles.fromTypo]}>
                Flight
              </Text>
            </View>
            <View style={[styles.categoryBlock, styles.ml6]}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--hotel.png")}
              />
              <Text style={[styles.flight, styles.mt22, styles.fromTypo]}>
                Hotels
              </Text>
            </View>
            <View style={[styles.categoryBlock, styles.ml6]}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--atractions.png")}
              />
              <Text style={[styles.flight, styles.mt22, styles.fromTypo]}>
                Attractions
              </Text>
            </View>
            <View style={[styles.categoryBlock, styles.ml6]}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--eats.png")}
              />
              <Text style={[styles.flight, styles.mt22, styles.fromTypo]}>
                Eats
              </Text>
            </View>
            <View style={[styles.categoryBlock, styles.ml6]}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--train.png")}
              />
              <Text style={[styles.flight, styles.mt22, styles.fromTypo]}>
                Commute
              </Text>
            </View>
          </ScrollView>
          <TrendingDestinationsContainer />
          <OffersContainer
            carImageUrl={require("../assets/offer-image.png")}
            vehicleImageUrl={require("../assets/offer-image1.png")}
            propMarginTop={30}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  mt82: {
    marginTop: 82,
  },
  mt22: {
    marginTop: Margin.m_4xl,
  },
  ml6: {
    marginLeft: Margin.m_4xs,
  },
  categoriesScrollViewContent: {
    flexDirection: "row",
  },
  mt30: {
    marginTop: Margin.m_7xl,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  exploreMainViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  viewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  viewFlexBox1: {
    padding: Padding.p_2xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.balooBhai2,
    fontWeight: "700",
    color: Color.white,
  },
  fromTypo: {
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  searchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_sm,
  },
  paris: {
    fontSize: FontSize.size_5xl,
  },
  from: {
    color: Color.white,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
  },
  text: {
    fontSize: 32,
  },
  fromParent: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  description: {
    alignItems: "flex-end",
    zIndex: 0,
  },
  heartIcon: {
    top: 14,
    right: 20,
    overflow: "hidden",
  },
  parisCardIcon: {
    borderRadius: Border.br_md,
    height: 180,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
  },
  tagFlight: {
    width: 48,
    height: 48,
  },
  flight: {
    color: Color.black,
  },
  categoryBlock: {
    width: 77,
    alignItems: "center",
  },
  categories: {
    alignSelf: "flex-start",
    width: "100%",
  },
  exploreContent: {
    alignSelf: "stretch",
  },
  exploreMainView: {
    alignSelf: "stretch",
    flex: 1,
  },
  explore: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    width: "100%",
    flex: 1,
  },
});

export default Explore;
