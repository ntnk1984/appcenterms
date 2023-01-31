import * as React from "react";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OneWaySection from "../components/OneWaySection";
import RoundTripSection from "../components/RoundTripSection";
import OneWay from "../components/OneWay";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import RoundTrip from "../components/RoundTrip";
import { TextInput as RNPTextInput } from "react-native-paper";
import OffersContainer from "../components/OffersContainer";
import { Margin, Color, Border, Padding } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();

const Search = () => {
  const [outlinedTextOnlyNoIcon2, setOutlinedTextOnlyNoIcon2] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon3, setOutlinedTextOnlyNoIcon3] =
    useState("Economy");

  return (
    <View style={[styles.search, styles.searchFlexBox]}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={[styles.searchPageBody, styles.searchFlexBox]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.searchPageBodyContent}
      >
        <View style={styles.flightSelection}>
          <TopTab.Navigator
            style={styles.waySelectionToptabs}
            tabBar={({ state, descriptors, navigation, position }) => {
              const [activeItems] = React.useState([
                <OneWay />,
                <FrameComponent1 />,
              ]);
              const [normalItems] = React.useState([
                <FrameComponent />,
                <RoundTrip />,
              ]);
              const activeIndex = state.index;
              return (
                <View style={styles.topTabBarStyle}>
                  {normalItems.map((item, index) => {
                    const isFocused = state.index === index;
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          navigation.navigate({
                            name: state.routes[index].name,
                            merge: true,
                          });
                        }}
                      >
                        {activeIndex === index ? activeItems[index] : item}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          >
            <TopTab.Screen name="One Way section" component={OneWaySection} />
            <TopTab.Screen
              name="Round trip section"
              component={RoundTripSection}
            />
          </TopTab.Navigator>
        </View>
        <OffersContainer
          carImageUrl={require("../assets/offer-image2.png")}
          vehicleImageUrl={require("../assets/offer-image3.png")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  group4: {
    backgroundColor: "#fff",
  },
  topTabContent: {
    flex: 1,
  },
  waySelectionToptabs: {
    width: "100%",
    height: 447,
  },
  topTabBarStyle: {
    borderRadius: 32,
    backgroundColor: "#f3f5f9",
    width: 317,
    flexDirection: "row",
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: 44,
    zIndex: 1,
  },
  ml13: {
    marginLeft: Margin.m_sm,
  },
  mt18: {
    marginTop: Margin.m_2xl,
  },
  mt13: {
    marginTop: Margin.m_sm,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  mt30: {
    marginTop: Margin.m_7xl,
  },
  searchPageBodyContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 16,
  },
  searchFlexBox: {
    flex: 1,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  outlinedtextIconFlexBox: {
    alignSelf: "flex-start",
    height: 56,
  },
  flightSelection: {
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    padding: Padding.p_lg,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  searchPageBody: {
    alignSelf: "stretch",
  },
  search: {
    width: "100%",
    height: 735,
  },
});

export default Search;
