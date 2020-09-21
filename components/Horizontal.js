import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { trimText } from "../Utilities";
import { TouchableOpacity } from "react-native";
import Votes from "./Votes";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding: 0px 25px;
  margin-top: 10px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;
const Data = styled.View`
  width: 70%;
  margin-left: 15px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Overview = styled.Text`
  color: white;
  margin-top: 7px;
`;

const ReleaseDate = styled.Text`
  color: rgb(210, 210, 210);

  margin-top: 3px;
  font-weight: 500;
  font-size: 12px;
`;

const Horizontal = ({
  isTv = false,
  id,
  title,
  overview,
  poster,
  releaseDate,
  votes,
  backgroundImage,
}) => {
  const navigation = useNavigation();
  const goToDetail = () =>
    navigation.navigate("자세히", {
      isTv,
      id,
      title,
      poster,
      overview,
      votes,
      releaseDate,
      backgroundImage,
    });
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 15)}</Title>
          {releaseDate ? (
            <ReleaseDate>개봉일: {releaseDate}</ReleaseDate>
          ) : null}
          {votes ? <Votes votes={votes}></Votes> : null}
          <Overview>{trimText(overview, 105)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default Horizontal;
