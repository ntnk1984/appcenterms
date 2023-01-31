const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Explore from "./screens/Explore";
import SearchTwoWay from "./screens/SearchTwoWay";
import Borocay from "./screens/Borocay";
import Bookings from "./screens/Bookings";
import Offers from "./screens/Offers";
import SearchResults from "./screens/SearchResults";
import SplashScreen from "./screens/SplashScreen";
import DrawerMenu from "./screens/DrawerMenu";
import ProfileIcon from "./screens/ProfileIcon";
import Search from "./screens/Search";
import BottomTab6 from "./components/BottomTab6";
import BottomTab7 from "./components/BottomTab7";
import BottomTab from "./components/BottomTab";
import BottomTab8 from "./components/BottomTab8";
import BottomTab9 from "./components/BottomTab9";
import BottomTab10 from "./components/BottomTab10";
import BottomTab11 from "./components/BottomTab11";
import BottomTab12 from "./components/BottomTab12";
import BottomTab13 from "./components/BottomTab2";
import BottomTab14 from "./components/BottomTab14";
import Header1 from "./components/Header1";
import Header from "./components/Header";
import Group41 from "./components/Group4";
import Header2 from "./components/Header2";
import Group4 from "./components/Group4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 320 } }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
      <Drawer.Screen
        name="Borocay"
        component={Borocay}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <BottomTab7 />,
    <BottomTab8 />,
    <BottomTab10 />,
    <BottomTab12 />,
    <BottomTab14 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <BottomTab6 />,
    <BottomTab />,
    <BottomTab9 />,
    <BottomTab11 />,
    <BottomTab13 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Explore"
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              shadowColor: "rgba(0, 0, 0, 0.03)",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowRadius: 15,
              elevation: 15,
              shadowOpacity: 1,
              flexDirection: "row",
              padding: 16,
              alignItems: "center",
              justifyContent: "space-between",
              height: 81,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={(props) => ({
          headerShown: true,
          header: () => <Header1 />,
        })}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={(props) => ({
          headerShown: true,
          header: () => <Header />,
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={(props) => ({
          headerShown: true,
          header: () => <Group41 />,
        })}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={(props) => ({
          headerShown: true,
          header: () => <Header2 />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileIcon}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    "Baloo Bhai 2": require("./assets/fonts/Baloo_Bhai_2.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

            <Stack.Screen
              name="SearchTwoWay"
              component={SearchTwoWay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResults"
              component={SearchResults}
              options={(props) => ({
                headerShown: true,
                header: () => <Group4 />,
              })}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
