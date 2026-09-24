import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMoives } from "../utils/__redux_store__/movieSlice";

const useNowPlayingMovies = () => {
  const disptch = useDispatch();
  const getMovieData = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => disptch(addNowPlayingMoives(res.results)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovieData();
  }, []);
};

export default useNowPlayingMovies;