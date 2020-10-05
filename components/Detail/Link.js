import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const Text = styled.Text`
  color: white;
  margin-left: 10px;
  font-weight: 600;
`;

const Link = ({ onPress, text, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <FontAwesome name={icon} color="white" size={22}></FontAwesome>
      <Text>{text}</Text>
    </Container>
  </TouchableOpacity>
);

export default Link;
