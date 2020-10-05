import axios from "axios";
import { min } from "react-native-reanimated";

const TMDB_KEY = "a2b8d720c4a07aaa524073dfe98190a9";

const getRandom = () => {
  m = Math.ceil(2);
  M = Math.floor(6);
  return Math.floor(Math.random() * (M - m + 1)) + min;
};

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () =>
    getAnything("/movie/now_playing", { language: "ko", region: "kr" }),
  popular: () =>
    getAnything("/movie/popular", { language: "ko", region: "kr" }),
  upcoming: () =>
    getAnything("/movie/upcoming", { language: "ko", region: "kr" }),
  search: (query) =>
    getAnything("/search/movie", { query, language: "ko", region: "kr" }),
  movie: (id) =>
    getAnything(`/movie/${id}`, {
      language: "ko",
      append_to_response: "videos",
    }),
  discover: () =>
    getAnything("/discover/movie", {
      language: "ko",
      region: "kr",
    }),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today", { language: "ko" }),
  thisWeek: () => getAnything("/tv/on_the_air", { language: "ko" }),
  topRated: () => getAnything("/tv/top_rated", { language: "ko" }),
  popular: () => getAnything("/tv/popular", { language: "ko" }),
  search: (query) => getAnything("/search/tv", { language: "ko", query }),
  show: (id) =>
    getAnything(`/tv/${id}`, { language: "ko", append_to_response: "videos" }),
};

export const apiImage = (
  path,
  defaultPoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAS1BMVEX////t7e3MzMzW1tb8/Pzj4+Pz8/P29vbPz8/U1NTe3t7b29v5+fnq6urv7+/Jycm6urqmpqbDw8O9vb2zs7OpqamhoaGoqKi2trZihp2AAAADM0lEQVR4nO3b23LqIBiGYcIm7ENM1Hr/V7og6ca2q3YdqbN4nwPrpBmH+Qbwh6AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/yTZ8Wc2Pbp5jzBEJ3/m4vDoBt5fdsrcolx+dBPvbXTR6hv/1za68W6teQ5B2l/usDLcpSXPQ8mvV/SU86ecpLpfc57Ct0zG6Lzz112j+0ysj6PW2V2F0nsm2sStIJnkx8TaeyZJvX7zOvN+rfdM7FsmVzNK75mkuPcPfVWpdZxJ2pY2WeVawqXgP9Y53WaSclBx0CIZFXKOfvq4pddMxqhMNs7YFk6M5rqc7zSTSdWqROjBx2kbRG34ZGOGbSXUZyaDD3s1b4M3+4pwUD7GWr+JTjOpY+ZtRq0VbLRtjm3LZT0qn/vMJFzVZ3VmUW4avNvnWG1c1P1l4pT7vJNWc5DhfUtl9M51mMm3LaOsrq7p0F8m8i+b0Da6/LH51t/Y+ban1Gjj4/u+Epm8mqIaXrsKmbyxxpu9q5DJOz2ouH0jk8mVca9qu8sk3sikVrVtqpXxbq15Dvn2Y75a3Yf+HgR6l5P+WS1V/KObeHda3XqELqXzPZ4syFH9LHY3cAAAwONMxdQqtpYfQyn7JnUx2re1jSm1TBvkVpmYskSdQtNB7WbOyyhmI+JBuqNr+0eHoC+XSejlbIVwJ1eXO+tqamTjSUYVe8jkdDQ1E32onSTPrae8BF0zEMNysELPfk1Cri0IOx2n3z7t/2DWUvRszEG0/uD1lslS2vOekxXDcVyyXfdTKMPRjONv5yP/B2YJ8zSb8FLfp+JSyyQVtSQZL1bIIpyfLkbknNN0uKxzD2tBs4yLuuz9xC57P0nFlFCG2YrjYpalDSlZzqafsbPosJ6MfbmaT1IZ3OLsbKezc2U1RdaoWiadHLo3a7Lr2Qh/iXHZTlMfaiZjOHlxsW6uA2pRefU510xOLgTTwdgZVBJxyULHItU2gZasVZpKFk6387E6xJS98spar2LsoT7RqR2/aXWJff0VQv2T6uX2ul3Z72hvt23Ih7YWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICnM+CrP31OHSbt2KrtAAAAAElFTkSuQmCC"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster);
