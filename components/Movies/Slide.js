import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../../API";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native";
import Votes from "../Votes";
import { trimText } from "../../Utilities";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Data = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: rgb(210, 210, 210);
  font-size: 12px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 7px;
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const VotesContainer = styled.View`
  margin-bottom: 7px;
`;

const Slide = ({
  isTv = false,
  id,
  title,
  backgroundImage,
  votes,
  overview,
  poster,
}) => {
  const navigation = useNavigation();
  const goToDetail = () =>
    navigation.navigate("자세히", {
      id,
      title,
      backgroundImage,
      votes,
      overview,
      poster,
      isTv,
    });
  return (
    <Container>
      <BG
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
        source={{ uri: apiImage(backgroundImage) }}
      />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 11)}</Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{trimText(overview, 110)}</Overview>
          <TouchableOpacity onPress={goToDetail}>
            <Button>
              <ButtonText>자세히 보기</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default Slide;
