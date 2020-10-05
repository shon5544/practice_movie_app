import React from "react";
import styled from "styled-components/native";
import HorizontalSlider from "../components/HorizontalSlider";
import ScrollContainer from "../components/ScrollContainer";
import Input from "../components/Search/Input";
import Vertical from "../components/Vertical";

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ movies, tv, onChange, onSubmit, keyword }) => (
  <ScrollContainer
    refreshFunction={onSubmit}
    loading={false}
    contentContainerStyle={{ paddingTop: 10 }}
  >
    <Input
      placeholder={"검색어를 입력해주세요"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={"영화 검색 결과"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            votes={movie.vote_average}
            title={movie.title}
            poster={movie.poster_path || movie.backdrop_path}
            overview={movie.overview}
            backgroundImage={movie.backdrop_path}
          />
        ))}
      </HorizontalSlider>
    )}
    {tv.length !== 0 && (
      <HorizontalSlider title={"TV 프로그램 검색 결과"}>
        {tv.map((tv) => (
          <Vertical
            isTv={true}
            key={tv.id}
            id={tv.id}
            votes={tv.vote_average}
            title={tv.name}
            poster={tv.poster_path || tv.backdrop_path}
            overview={tv.overview}
            backgroundImage={tv.backdrop_path}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
