import * as React from "react";
import { useState } from "react";
import MenuItem1 from "../components/MenuItem1";
import MenuItem from "../components/MenuItem";
import MenuItem2 from "../components/MenuItem2";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Margin, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const DrawerMenu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <MenuItem1 style={styles.mt28} />,
    <MenuItem style={styles.mt28} />,
    <MenuItem2 style={styles.mt28} />,
  ]);
  const [drawerItemsActive] = useState([
    <MenuItem1 style={styles.mt28} />,
    <MenuItem style={styles.mt28} />,
    <MenuItem2 style={styles.mt28} />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;
  return (
    <SafeAreaView style={styles.drawerMenu}>
      <View style={styles.view}>
        <View style={styles.menu}>
          <View style={styles.profile}>
            <View style={styles.group3Wrapper}>
              <Image
                style={styles.group3Icon}
                resizeMode="cover"
                source={require("../assets/group32.png")}
              />
            </View>
            <View style={styles.ml12}>
              <Text style={[styles.hello, styles.helloTypo]}>Hello</Text>
              <Text style={[styles.macyJohnson, styles.helloTypo]}>
                Macy Johnson
              </Text>
            </View>
          </View>
          <View style={[styles.menuChild, styles.mt20]} />
          <View style={styles.mt20}>
            {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
            {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
            {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
            <View style={[styles.menuItem, styles.mt28]}>
              <Image
                style={styles.ionmailOutlineIcon}
                resizeMode="cover"
                source={require("../assets/ionmailoutline.png")}
              />
              <Text style={[styles.getHelp, styles.ml16, styles.getHelpTypo]}>
                Get Help
              </Text>
            </View>
            <View style={[styles.profile, styles.mt28]}>
              <Image
                style={styles.ionmailOutlineIcon}
                resizeMode="cover"
                source={require("../assets/calender.png")}
              />
              <Text style={[styles.getHelp, styles.ml16, styles.getHelpTypo]}>
                Covid Advisory
              </Text>
            </View>
            <View style={[styles.menuItem, styles.mt28]}>
              <Image
                style={styles.ionmailOutlineIcon}
                resizeMode="cover"
                source={require("../assets/rate.png")}
              />
              <Text style={[styles.getHelp, styles.ml16, styles.getHelpTypo]}>
                Rate us
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.group3Wrapper}>
          <Text style={[styles.appVersion101, styles.getHelpTypo]}>
            App version 1.0.1
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 12,
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt28: {
    marginTop: Margin.m_6xl,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  drawerMenu: {
    flex: 1,
    backgroundColor: Color.white,
  },
  helloTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  getHelpTypo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  group3Icon: {
    width: 49,
    height: 49,
  },
  group3Wrapper: {
    flexDirection: "row",
  },
  hello: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.lightslategray,
  },
  macyJohnson: {
    fontSize: FontSize.size_3xl,
    lineHeight: 30,
    fontWeight: "700",
    color: Color.black,
  },
  profile: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuChild: {
    borderStyle: "solid",
    borderColor: "#e6e9f0",
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  ionmailOutlineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  getHelp: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
  },
  menuItem: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  menu: {
    alignSelf: "stretch",
  },
  appVersion101: {
    fontSize: FontSize.size_base,
    color: Color.lightslategray,
  },
  view: {
    width: 320,
    height: 812,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xl,
    justifyContent: "space-between",
    backgroundColor: Color.white,
  },
});

export default DrawerMenu;
