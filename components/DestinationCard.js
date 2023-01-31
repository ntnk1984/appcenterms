import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const DestinationCard = ({
  destinationTitle,
  destinationImage,
  destinationDetail,
  destinationDuration,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.destinationCard}
      onPress={() => navigation.navigate("DrawerRoot", { screen: "Borocay" })}
    >
      <Image
        style={styles.destinationImageIcon}
        resizeMode="cover"
        source={destinationImage}
      />
      <View style={[styles.details, styles.mt10]}>
        <View>
          <Text style={styles.boracay}>{destinationTitle}</Text>
          <Text style={[styles.philippines, styles.mt1, styles.d4nTypo]}>
            {destinationDetail}
          </Text>
        </View>
        <View style={styles.duration}>
          <Text style={[styles.d4n, styles.d4nTypo]}>
            {destinationDuration}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: Margin.m_8xs,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  d4nTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  destinationImageIcon: {
    width: 131,
    height: 90,
  },
  boracay: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  philippines: {
    color: Color.lightslategray,
  },
  d4n: {
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
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  destinationCard: {
    borderRadius: Border.br_md,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 151,
    padding: Padding.p_xs,
  },
});

export default DestinationCard;
