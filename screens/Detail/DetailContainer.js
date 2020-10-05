import React, { useEffect, useState } from "react";
import { movieApi, tvApi } from "../../API";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from "expo-web-browser";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, poster, overview, votes, backgroundImage },
  },
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      poster,
      overview,
      votes,
      backgroundImage,
      videos: {
        results: [],
      },
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);

    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average,
      },
    });
  };

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <DetailPresenter openBrowser={openBrowser} {...detail} />;
};
