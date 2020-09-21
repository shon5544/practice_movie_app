import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import List from "../../components/List";
import SlideComponent from "../../components/SlideComponent";
import Slide from "../../components/Movies/Slide";
import Horizontal from "../../components/Horizontal";

const Container = styled.View`
  margin-top: 10px;
`;

export default ({ refreshFunction, loading, popular, topRated, today }) => (
  <ScrollContainer loading={loading} refreshFunction={refreshFunction}>
    <Container>
      <SlideComponent title={"오늘 방영하는 TV 프로그램"}>
        {today.map((tv) => (
          <Slide
            isTv={true}
            key={tv.id}
            id={tv.id}
            title={tv.name}
            overview={tv.overview}
            votes={tv.vote_average}
            backgroundImage={tv.backdrop_path}
            poster={tv.poster_path}
          />
        ))}
      </SlideComponent>
      <HorizontalSlider title={"인기 TV 프로그램"}>
        {popular.map((tv) => (
          <Vertical
            isTv={true}
            id={tv.id}
            key={tv.id}
            title={tv.name}
            votes={tv.vote_average}
            poster={tv.poster_path}
            overview={tv.overview}
            backgroundImage={tv.backdrop_path}
          />
        ))}
      </HorizontalSlider>
      <List title={"최고 평점 TV 프로그램"}>
        {topRated.map((tv) => (
          <Horizontal
            isTv={true}
            key={tv.id}
            id={tv.id}
            title={tv.name}
            overview={tv.overview}
            poster={tv.poster_path}
            votes={tv.vote_average}
            backgroundImage={tv.backdrop_path}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
