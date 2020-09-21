import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../../API";
import MoviesPresenter from "./MoviesPresenter";

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcomming: [],
    nowPlayingError: null,
    popularError: null,
    upcommingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcomming, upcommingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcomming,
      nowPlayingError,
      popularError,
      upcommingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <MoviesPresenter {...movies} refreshFunction={getData} />;
};
