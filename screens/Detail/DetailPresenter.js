import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { apiImage } from "../../API";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { formatDate } from "../../Utilities";
import Link from "../../components/Detail/Link";

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

const Texts = styled.Text`
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
  margin-bottom: 10px;
  margin-top: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

function comma(num) {
  //출처: https://fruitdev.tistory.com/160 [과일가게 개발자]
  var len, point, str;

  num = num + "";
  point = num.length % 3;
  len = num.length;

  str = num.substring(0, point);
  while (point < len) {
    if (str != "") str += ",";
    str += num.substring(point, point + 3);
    point += 3;
  }

  return str;
}

const GenreContainer = styled.View`
  flex-direction: row;
`;

const GenreValue = styled.Text`
  background-color: #cccccc;
  border-radius: 5px;
  margin-right: 7px;
  color: white;
  opacity: 0.5;
  width: 80px;
  text-align: center;
`;

export default ({ result, loading, openBrowser }) => (
  <ScrollContainer
    loading={false}
    contentContainerStyle={{ paddingBottom: 50 }}
  >
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
              <Texts>매겨진 점수가 없습니다.</Texts>
            )}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.genres ? (
          <>
            <DataName>장르</DataName>
            <GenreContainer>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {result.genres.map((g) => {
                  return <GenreValue key={g.id}>{`${g.name}`}</GenreValue>;
                })}
              </ScrollView>
            </GenreContainer>
          </>
        ) : null}
        {result.runtime ? (
          <>
            <DataName>상영 시간</DataName>
            <DataValue>{`${result.runtime}분`}</DataValue>
          </>
        ) : null}
        {result.number_of_episodes ? (
          <>
            <DataName>총 방영 수</DataName>
            <DataValue>{`총 ${result.number_of_episodes}화`}</DataValue>
          </>
        ) : null}
        {result.number_of_seasons && (
          <>
            <DataName>방영된 시즌</DataName>
            <DataValue>{`시즌 ${result.number_of_seasons} | ${result.number_of_seasons}기`}</DataValue>
          </>
        )}

        {result.overview ? (
          <>
            <DataName>줄거리</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        ) : (
          <Texts>등록된 줄거리가 없습니다.</Texts>
        )}
        {loading && (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        )}

        {result.spoken_languages && (
          <>
            <DataName>언어</DataName>
            <DataValue>
              {result.spoken_languages.map((l) => `${l.name}`)}
            </DataValue>
          </>
        )}
        {result.release_date ? (
          <>
            <DataName>개봉일</DataName>
            <DataValue>{formatDate(result.release_date)}</DataValue>
          </>
        ) : null}
        {result.status ? (
          <>
            <DataName>개봉 현황</DataName>
            <DataValue>
              {result.status === "Released" ? "개봉됨" : "개봉 예정"}
            </DataValue>
          </>
        ) : null}
        {result.revenue ? (
          <>
            <DataName>수익</DataName>
            <DataValue>{`${comma(result.revenue)} $`}</DataValue>
          </>
        ) : null}
        {result.first_air_date ? (
          <>
            <DataName>첫 방송일</DataName>
            <DataValue>{result.first_air_date}</DataValue>
          </>
        ) : null}
        {result.videos.results?.length > 0 ? (
          <>
            <DataName>YouTube 예고편 | 티져</DataName>
            {result.videos.results.map((video) => (
              <Link
                text={video.name}
                key={video.id}
                icon="youtube-play"
                onPress={() =>
                  openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                }
              />
            ))}
          </>
        ) : null}
        {result.imdb_id ? (
          <>
            <DataName>IMDB(인터넷 영화 데이터베이스) 예고편 | 티져</DataName>
            <Link
              icon={"imdb"}
              text={"IMDB에서 보기"}
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
              }
            />
          </>
        ) : null}
      </Data>
    </>
  </ScrollContainer>
);
