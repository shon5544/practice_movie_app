import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import { ActivityIndicator, Dimensions } from "react-native";
import { apiImage } from "../../API";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { formatDate } from "../../Utilities";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;
const Info = styled.View`
  width: 50%;
  margin-left: 40px;
  top: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  color: rgb(210, 210, 210);
  font-weight: 500;
  font-size: 12px;
`;

const Data = styled.View`
  padding: 0px 30px;
  margin-top: 60px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ result, loading }) => (
  <ScrollContainer loading={false}>
    <>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes > 0 ? (
              <Votes votes={result.votes}></Votes>
            ) : (
              <Text>매겨진 점수가 없습니다.</Text>
            )}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview ? (
          <>
            <DataName>줄거리</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        ) : (
          <Text>등록된 줄거리가 없습니다.</Text>
        )}
        {loading && (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        )}
        {result.spoken_languages && (
          <>
            <DataName>언어</DataName>
            <DataValue>{result.spoken_languages.map((l) => l.name)}</DataValue>
          </>
        )}
        {result.release_date && (
          <>
            <DataName>개봉일</DataName>
            <DataValue>{formatDate(result.release_date)}</DataValue>
          </>
        )}
      </Data>
    </>
  </ScrollContainer>
);
