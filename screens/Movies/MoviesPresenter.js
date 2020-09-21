import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import SlideComponent from "../../components/SlideComponent";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const Container = styled.View``;

export default ({
  refreshFunction,
  loading,
  nowPlaying,
  popular,
  upcomming,
}) => (
  <ScrollContainer refreshFunction={refreshFunction} loading={loading}>
    <>
      <SlideComponent title={"추천 영화"}>
        {nowPlaying.map((movie) => (
          <Slide
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            votes={movie.vote_average}
            backgroundImage={movie.backdrop_path}
            poster={movie.poster_path}
          />
        ))}
      </SlideComponent>
      <Container>
        <HorizontalSlider title={"인기 영화"}>
          {popular.map((movie) => (
            <Vertical
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
              overview={movie.overview}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </HorizontalSlider>
        <List title={"개봉 예정인 영화"}>
          {upcomming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster={movie.poster_path}
              releaseDate={movie.release_date}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
