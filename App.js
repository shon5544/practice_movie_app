import React, { useState } from "react";
// import { AppLoading } from "expo";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
import Stack from "./Navigation/Stack";

// const cacheImages = (images) => {
//   images.map((image) => {
//     if (typeof image === "string") {
//       return Image.prefetch(image);
//     }
//   });
// };

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  // const loadAssets = () => {
  //   const images = cacheImages([
  //     "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  //   ]);
  //   return Promise.all([...images]);
  // };
  // const onFinish = () => setIsReady(true);
  return (
    <>
      <NavigationContainer>
        <Stack></Stack>
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  );
}
