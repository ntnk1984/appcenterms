import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RoundTripSection from "../components/RoundTripSection";
import OneWaySection from "../components/OneWaySection";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import RoundTrip from "../components/RoundTrip";

const TopTab = createMaterialTopTabNavigator();

const WaySelection = ({ style }) => {
  return (
    <TopTab.Navigator
      style={[styles.waySelectionToptabs, style]}
      tabBar={({ state, descriptors, navigation, position }) => {
        const [activeItems] = React.useState([
          <FrameComponent1 />,
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
      <TopTab.Screen name="Round trip section" component={RoundTripSection} />
      <TopTab.Screen name="One Way section" component={OneWaySection} />
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  topTabContent: {
    flex: 1,
  },
  waySelectionToptabs: {
    width: "100%",
  },
  topTabBarStyle: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 32,
    backgroundColor: "#f3f5f9",
    height: 44,
    flexDirection: "row",
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: 44,
    zIndex: 1,
  },
});

export default WaySelection;
