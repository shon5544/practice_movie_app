import React, { useState } from "react";
import { movieApi, tvApi } from "../API";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResult] = useState({
    movies: [],
    tv: [],
    moviesError: null,
    tvError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, moviesError] = await movieApi.search(keyword);
    const [tv, tvError] = await tvApi.search(keyword);
    setResult({
      movies,
      tv,
      moviesError,
      tvError,
    });
  };
  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};
