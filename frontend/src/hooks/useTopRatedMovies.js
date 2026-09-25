import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMoives,
  addTopRatedMovies,
} from "../utils/__redux_store__/movieSlice";

const useTopRatedMovies = () => {
  const disptch = useDispatch();
  const getMovieData = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => disptch(addTopRatedMovies(res.results)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovieData();
  }, []);
};

export default useTopRatedMovies;
