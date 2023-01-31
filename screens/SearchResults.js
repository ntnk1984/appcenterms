import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import FlightContainer from "../components/FlightContainer";
import FlightCardHolder from "../components/FlightCardHolder";
import {
  Margin,
  FontSize,
  Color,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const SearchResults = () => {
  return (
    <View style={styles.searchResults}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.searchResultsBody}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.searchResultsBodyContent}
      >
        <View style={[styles.listHeader, styles.viewFrameFlexBox]}>
          <Text style={[styles.resultsFound, styles.singaporeTypo]}>
            35 results found
          </Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={styles.listItems}>
          <FlightContainer travelTime="01 hr 40min" travelCost="$1128" />
          <FlightContainer travelTime="02 hr 10min" travelCost="$1420" />
          <FlightCardHolder
            estimatedTime="02 hr 38min"
            estimatedTimeImageUrl={require("../assets/icon--flight1.png")}
            estimatedPrice="$1550"
            propColor="#191919"
            propColor1="#bbb"
            propPaddingVertical={10}
            propFontWeight1="600"
          />
          <View style={styles.flightCardHolder}>
            <View style={styles.flightCard}>
              <View style={[styles.frameGroup, styles.viewFrameFlexBox]}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.groupChildLayout}>
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <Image
                      style={styles.image4Icon}
                      resizeMode="cover"
                      source={require("../assets/image-4.png")}
                    />
                  </View>
                  <Text
                    style={[
                      styles.lufthansaAirlines,
                      styles.ml8,
                      styles.july2022Layout,
                      styles.singaporeTypo,
                    ]}
                  >
                    Lufthansa Airlines
                  </Text>
                </View>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.fluenttimer24RegularIcon}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular1.png")}
                  />
                  <Text style={[styles.hr15min, styles.ml4, styles.fromTypo]}>
                    03 hr 15min
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.group13Parent,
                  styles.mt14,
                  styles.frameSpaceBlock,
                  styles.parentFlexBox1,
                ]}
              >
                <View>
                  <Text style={styles.sin1}>SIN</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Singapore
                  </Text>
                </View>
                <View
                  style={[
                    styles.line2Parent,
                    styles.ml18,
                    styles.viewFrameFlexBox,
                  ]}
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
                    source={require("../assets/icon--flight2.png")}
                  />
                  <Image
                    style={[styles.ovalIcon1, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                </View>
                <View style={[styles.group131, styles.ml18]}>
                  <Text style={styles.sin1}>LAX</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.mt14, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View
                style={[
                  styles.frameContainer,
                  styles.mt14,
                  styles.frameSpaceBlock,
                ]}
              >
                <View
                  style={[
                    styles.frameView,
                    styles.frameSpaceBlock,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <View style={styles.chairParent}>
                    <Image
                      style={styles.chairIcon}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text
                      style={[styles.economyClass, styles.ml8, styles.fromTypo]}
                    >
                      Economy Class
                    </Text>
                  </View>
                  <View style={styles.parentFlexBox1}>
                    <Text style={[styles.from, styles.fromTypo]}>From</Text>
                    <Text style={[styles.text, styles.ml4, styles.textTypo]}>
                      $1650
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.buttonPrimary,
                    styles.mt10,
                    styles.parentFlexBox,
                  ]}
                >
                  <Text
                    style={[
                      styles.viewDetails,
                      styles.textTypo,
                      styles.july2022Typo,
                    ]}
                  >
                    View Details
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <FlightCardHolder
            estimatedTime="03 hr 38min"
            estimatedTimeImageUrl={{ uri: "icon--flight5@3x.png" }}
            estimatedPrice="$450"
            propColor="#555"
            propColor1="#7e8b97"
            propFontWeight="300"
            propWidth={48}
            propPaddingVertical={8}
            propFontWeight1="500"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: Margin.m_4xs,
  },
  mt3: {
    marginTop: Margin.m_6xs,
  },
  mt4: {
    marginTop: Margin.m_5xs,
  },
  group4: {
    backgroundColor: "#fff",
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
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
  searchResultsBodyContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  viewFrameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  july2022Typo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  july2022Layout: {
    lineHeight: 16,
    color: Color.lightslategray,
    fontFamily: FontFamily.inter,
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  singaporeTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  groupChildLayout: {
    width: 48,
    height: 32,
  },
  fromTypo: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.inter,
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
  },
  parentFlexBox1: {
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
    lineHeight: 24,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
  },
  resultsFound: {
    color: Color.lightslategray,
    fontFamily: FontFamily.inter,
  },
  vectorIcon: {
    width: 17,
    height: 15,
  },
  listHeader: {
    paddingBottom: 11,
    alignSelf: "stretch",
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
  image4Icon: {
    top: 11,
    left: 4,
    width: 40,
    height: 9,
    position: "absolute",
  },
  lufthansaAirlines: {
    color: Color.lightslategray,
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  hr15min: {
    textAlign: "right",
    color: Color.lightslategray,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_sm,
    alignSelf: "stretch",
  },
  sin1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    color: Color.cornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  singapore: {
    color: Color.black,
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
  },
  group131: {
    alignItems: "flex-end",
  },
  group13Parent: {
    paddingVertical: 0,
  },
  line3Icon: {
    height: 1,
    alignSelf: "stretch",
    width: "100%",
  },
  chairIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  economyClass: {
    textAlign: "left",
    color: Color.black,
  },
  chairParent: {
    flexDirection: "row",
  },
  from: {
    color: Color.silver,
    textAlign: "right",
    width: 32,
    fontSize: FontSize.size_xs,
  },
  text: {
    textAlign: "right",
    color: Color.black,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
  },
  frameView: {
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  viewDetails: {
    color: Color.white,
    width: 120,
  },
  buttonPrimary: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameContainer: {
    paddingBottom: Padding.p_sm,
  },
  flightCard: {
    borderRadius: Border.br_md,
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
    backgroundColor: Color.white,
  },
  flightCardHolder: {
    paddingBottom: Padding.p_2xs,
    alignSelf: "stretch",
  },
  listItems: {
    alignSelf: "stretch",
  },
  searchResultsBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  searchResults: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
});

export default SearchResults;
