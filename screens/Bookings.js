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
import BookingContainer from "../components/BookingContainer";
import { Margin, Color, FontFamily, FontSize } from "../GlobalStyles";

const Bookings = () => {
  return (
    <View style={styles.bookings}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.bookingsBody}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bookingsBodyScrollViewContent}
      >
        <Text style={[styles.upcomingBookings, styles.bookingsTypo]}>
          Upcoming Bookings
        </Text>
        <BookingContainer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  header: {
    backgroundColor: "#fff",
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  bookingsBodyScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 31,
  },
  viewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  bookingsTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xl,
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  searchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_sm,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  upcomingBookings: {
    lineHeight: 24,
    fontWeight: "700",
  },
  bookingsBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  bookings: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    width: "100%",
    flex: 1,
  },
});

export default Bookings;
