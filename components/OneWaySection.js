import * as React from "react";
import { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const OneWaySection = ({ style }) => {
  const [outlinedTextOnlyNoIcon2, setOutlinedTextOnlyNoIcon2] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon3, setOutlinedTextOnlyNoIcon3] =
    useState("Economy");
  const navigation = useNavigation();

  return (
    <View style={[styles.oneWaySection, style]}>
      <View style={styles.form}>
        <RNPTextInput
          style={styles.outlinedLabeled}
          placeholder="Select Departure"
          label="From"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-takeoff"
            />
          }
          placeholderTextColor="#9eaab6"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto" } },
            colors: { text: "#191919" },
          }}
        />
        <RNPTextInput
          style={[
            styles.outlinedtextOnlyNoIcon,
            styles.mt18,
            styles.outlinedtextIconFlexBox,
          ]}
          placeholder="Select Arrival"
          label="To"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-landing"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
        <RNPTextInput
          style={[
            styles.outlinedtextOnlyNoIcon,
            styles.mt18,
            styles.outlinedtextIconFlexBox,
          ]}
          placeholder="Select Date"
          label="Departure Date"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="calendar-blank"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
        <View style={[styles.inputsRow, styles.mt18]}>
          <RNPTextInput
            style={[
              styles.outlinedtextOnlyNoIcon2,
              styles.outlinedtextIconFlexBox,
            ]}
            placeholder="Select Pax"
            label="Passengers"
            mode="outlined"
            value={outlinedTextOnlyNoIcon2}
            onChangeText={setOutlinedTextOnlyNoIcon2}
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="account-multiple"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
          <RNPTextInput
            style={[
              styles.outlinedtextOnlyNoIcon2,
              styles.ml13,
              styles.outlinedtextIconFlexBox,
            ]}
            placeholder="Select Class"
            label="Class"
            mode="outlined"
            value={outlinedTextOnlyNoIcon3}
            onChangeText={setOutlinedTextOnlyNoIcon3}
            left={
              <RNPTextInput.Icon style={{ marginTop: "50%" }} name="thumb-up" />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonPrimary, styles.mt13]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.viewDetails}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_sm,
  },
  mt18: {
    marginTop: Margin.m_2xl,
  },
  mt13: {
    marginTop: Margin.m_sm,
  },
  outlinedtextIconFlexBox: {
    alignSelf: "flex-start",
    height: 56,
  },
  outlinedLabeled: {
    height: 56,
    width: 313,
  },
  outlinedtextOnlyNoIcon: {
    width: 313,
  },
  outlinedtextOnlyNoIcon2: {
    width: 150,
  },
  inputsRow: {
    flexDirection: "row",
  },
  form: {
    alignSelf: "stretch",
  },
  viewDetails: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    color: Color.white,
    textAlign: "center",
    width: 120,
  },
  buttonPrimary: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_3xl,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 313,
    paddingVertical: Padding.p_xs,
  },
  oneWaySection: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
});

export default OneWaySection;
