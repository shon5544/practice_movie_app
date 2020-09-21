import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "../components/Votes";
import { TouchableOpacity } from "react-native";
import { trimText } from "../Utilities";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  align-items: center;
  margin: 0px 14px 5px 0px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Text = styled.Text`
  color: rgb(210, 210, 210);
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 12px;
`;

const Vertical = ({
  isTv = false,
  id,
  poster,
  title,
  votes,
  overview,
  backgroundImage,
}) => {
  const navigation = useNavigation();
  const goToDetail = () =>
    navigation.navigate("자세히", {
      isTv,
      id,
      title,
      poster,
      votes,
      overview,
      backgroundImage,
    });
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 ? (
          <Votes votes={votes} />
        ) : (
          <Text>매겨진 점수가 없습니다.</Text>
        )}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
