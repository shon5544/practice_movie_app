import React from "react";
import styled from "styled-components/native";
import Title from "./Title";
import { Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-web-swiper";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3.3}px;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const TitleContainer = styled.View``;
const TitleText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 25px;
`;

const SlideComponent = ({ title, children }) => (
  <>
    <TitleContainer>
      <TitleText>{title}</TitleText>
    </TitleContainer>
    <SliderContainer>
      <Swiper controlsEnabled={false} loop timeout={3}>
        {children}
      </Swiper>
    </SliderContainer>
  </>
);

export default SlideComponent;
