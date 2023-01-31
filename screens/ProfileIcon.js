import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../GlobalStyles";

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.profileIcon}
      resizeMode="cover"
      source={require("../assets/profile.png")}
    >
      <ScrollView
        style={styles.profileSection}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.profileSectionScrollViewContent}
      >
        <View style={styles.header}>
          <Pressable
            style={[
              styles.iconBackWrapper,
              styles.wrapperFlexBox,
              styles.profileDrawerShadowBox,
            ]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/icon--back1.png")}
            />
          </Pressable>
          <View
            style={[
              styles.iconBackWrapper,
              styles.wrapperFlexBox,
              styles.profileDrawerShadowBox,
            ]}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/fluentedit48regular.png")}
            />
          </View>
        </View>
        <View style={[styles.profileBody, styles.mt50]}>
          <View style={[styles.profileDrawer, styles.profileDrawerShadowBox]}>
            <View style={styles.profileDetails}>
              <View style={styles.nameParticulars}>
                <View>
                  <Text style={styles.macyJohnson}>Macy Johnson</Text>
                  <Text
                    style={[
                      styles.baguioPhilippines,
                      styles.mt2,
                      styles.iLikeTheTypo,
                    ]}
                  >
                    Baguio, Philippines
                  </Text>
                </View>
              </View>
              <Text
                style={[
                  styles.iLikeThe,
                  styles.mt16,
                  styles.iLikeTheLayout,
                  styles.iLikeTheTypo,
                ]}
              >
                I like the beach, mountains, forest and everything about nature!
                :)
              </Text>
              <View style={[styles.profileDetailsChild, styles.mt16]} />
              <View style={[styles.profileOptions, styles.mt16]}>
                <View style={styles.wrapperFlexBox}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      resizeMode="cover"
                      source={require("../assets/bicreditcard2back.png")}
                    />
                  </View>
                  <Text
                    style={[
                      styles.paymentDetails,
                      styles.ml16,
                      styles.newTypo,
                      styles.iLikeTheLayout,
                    ]}
                  >
                    Payment Details
                  </Text>
                </View>
                <View style={[styles.profileOption1, styles.mt20]}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      resizeMode="cover"
                      source={require("../assets/healthiconsvirusshieldoutline.png")}
                    />
                  </View>
                  <Text
                    style={[
                      styles.paymentDetails,
                      styles.ml16,
                      styles.newTypo,
                      styles.iLikeTheLayout,
                    ]}
                  >
                    Covid Advisory
                  </Text>
                </View>
                <View style={[styles.profileOption1, styles.mt20]}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.humbleiconsuserAsking}
                      resizeMode="cover"
                      source={require("../assets/humbleiconsuserasking.png")}
                    />
                  </View>
                  <View style={[styles.profileOption1, styles.ml16]}>
                    <Text
                      style={[
                        styles.paymentDetails,
                        styles.newTypo,
                        styles.iLikeTheLayout,
                      ]}
                    >
                      Referral Code
                    </Text>
                    <View
                      style={[
                        styles.newWrapper,
                        styles.ml10,
                        styles.wrapperFlexBox,
                      ]}
                    >
                      <Text style={[styles.new, styles.newTypo]}>new</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.profileOption1, styles.mt20]}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      resizeMode="cover"
                      source={require("../assets/claritysettingsline.png")}
                    />
                  </View>
                  <Text
                    style={[
                      styles.paymentDetails,
                      styles.ml16,
                      styles.newTypo,
                      styles.iLikeTheLayout,
                    ]}
                  >
                    Settings
                  </Text>
                </View>
                <View style={[styles.profileOption1, styles.mt20]}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      resizeMode="cover"
                      source={require("../assets/majesticonslogouthalfcircleline.png")}
                    />
                  </View>
                  <Text
                    style={[
                      styles.paymentDetails,
                      styles.ml16,
                      styles.newTypo,
                      styles.iLikeTheLayout,
                    ]}
                  >
                    Logout
                  </Text>
                </View>
                <View
                  style={[styles.questions, styles.mt20, styles.wrapperFlexBox]}
                >
                  <Image
                    style={styles.humbleiconsuserAsking}
                    resizeMode="cover"
                    source={require("../assets/ionhelpcircleoutline.png")}
                  />
                  <Text
                    style={[
                      styles.haveQuestionsWe,
                      styles.ml8,
                      styles.iLikeTheLayout,
                      styles.iLikeTheTypo,
                    ]}
                  >
                    Have questions? We are here to help
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profileImage}>
            <Image
              style={styles.group3Icon}
              resizeMode="cover"
              source={require("../assets/group33.png")}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: Margin.m_7xs,
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  mt16: {
    marginTop: Margin.m_lg,
  },
  mt50: {
    marginTop: 50,
  },
  profileSectionScrollViewContent: {
    flexDirection: "column",
    paddingTop: 30,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  profileDrawerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  iLikeTheTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inter,
  },
  iLikeTheLayout: {
    lineHeight: 24,
    textAlign: "left",
  },
  newTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  iconBack: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconBackWrapper: {
    borderRadius: Border.br_3xl,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    padding: Padding.p_5xs,
  },
  header: {
    padding: Padding.p_2xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  macyJohnson: {
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  baguioPhilippines: {
    color: Color.lightslategray,
    textAlign: "left",
  },
  nameParticulars: {
    alignSelf: "stretch",
  },
  iLikeThe: {
    color: Color.black,
    alignSelf: "stretch",
  },
  profileDetailsChild: {
    borderStyle: "solid",
    borderColor: "#e6e9f0",
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  rate: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.aliceblue_100,
    padding: Padding.p_5xs,
  },
  paymentDetails: {
    fontSize: FontSize.size_xl,
    color: Color.black,
  },
  profileOption1: {
    alignItems: "center",
    flexDirection: "row",
  },
  humbleiconsuserAsking: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  new: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    textTransform: "uppercase",
    color: Color.white,
    textAlign: "center",
  },
  newWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.mediumaquamarine,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_7xs,
  },
  haveQuestionsWe: {
    color: Color.cornflowerblue,
  },
  questions: {
    borderRadius: 7,
    backgroundColor: "#eaf5ff",
    padding: Padding.p_xs,
    alignSelf: "stretch",
  },
  profileOptions: {
    height: 322,
    alignSelf: "stretch",
  },
  profileDetails: {
    flex: 1,
  },
  profileDrawer: {
    borderTopLeftRadius: Border.br_lg,
    borderTopRightRadius: Border.br_lg,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: 43,
    zIndex: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  group3Icon: {
    width: 90,
    height: 90,
  },
  profileImage: {
    position: "absolute",
    top: 0,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
  },
  profileBody: {
    paddingTop: 42,
    alignSelf: "stretch",
  },
  profileSection: {
    alignSelf: "stretch",
    flex: 1,
  },
  profileIcon: {
    width: "100%",
    flex: 1,
  },
});

export default ProfileIcon;
