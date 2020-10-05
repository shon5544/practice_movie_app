import React, { useEffect, useState } from "react";
import FavsPresenter from "./FavsPresenter";
import { movieApi } from "../../API";

export default () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <FavsPresenter {...movies} />;
};
