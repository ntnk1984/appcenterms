import * as React from "react";
import { StyleSheet, View } from "react-native";
import OffersContainer from "../components/OffersContainer";

const OffersSection = () => {
  return (
    <View style={[styles.offersSectionWrapper, styles.mt20]}>
      <OffersContainer
        carImageUrl={require("../assets/offer-image2.png")}
        vehicleImageUrl={require("../assets/offer-image3.png")}
        propMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  offersSectionWrapper: {
    width: 343,
  },
});

export default OffersSection;
