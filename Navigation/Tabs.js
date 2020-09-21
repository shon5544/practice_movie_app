import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies/MoviesContainer";
import Search from "../Search/index";
import Favs from "../screens/Favs";
import Tv from "../screens/TV/TvContainer";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "영화";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route),
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "영화") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "검색") {
            iconName += "search";
          } else if (route.name === "디스커버리") {
            iconName += "bookmark";
          }
          return (
            <Ionicons
              name={iconName}
              size={26}
              color={focused ? "white" : "grey"}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="영화" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="검색" component={Search} />
      <Tabs.Screen name="디스커버리" component={Favs} />
    </Tabs.Navigator>
  );
};
