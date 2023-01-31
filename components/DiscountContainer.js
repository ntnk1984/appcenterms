import * as React from "react";
import { StyleSheet, View } from "react-native";
import MasterCardOfferCard from "../components/MasterCardOfferCard";
import { Margin } from "../GlobalStyles";

const DiscountContainer = () => {
  return (
    <View style={styles.offersList}>
      <MasterCardOfferCard
        discountImageUrl={require("../assets/icon--heart.png")}
        discountText="Get 20% discount"
        creditCardType="with your Master credit cards"
        discountImageUrl2={require("../assets/image-7.png")}
        mastercardDiscountText="Use your mastercard with any transaction and get 20% discount instantly! "
        visaDiscountImageUrl={require("../assets/vector-1.png")}
        propTop={1}
        propHeight={71}
      />
      <MasterCardOfferCard
        discountImageUrl={require("../assets/icon--heart1.png")}
        discountText="25% discount"
        creditCardType="with your VISA credit or debit cards"
        discountImageUrl2={require("../assets/image-8.png")}
        mastercardDiscountText="Use your VISA credit or debit card with any transaction and get 25% discount instantly! "
        visaDiscountImageUrl={require("../assets/vector-11.png")}
        propMarginTop={14}
        propTop={0}
        propHeight={72}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: Margin.m_md,
  },
  offersList: {
    flex: 1,
  },
});

export default DiscountContainer;
