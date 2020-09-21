import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailContainer from "../screens/Detail/index";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      gestureEnabled: true,
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="영화" component={Tabs} />
    <Stack.Screen name="자세히" component={DetailContainer} />
  </Stack.Navigator>
);
