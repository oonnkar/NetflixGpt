import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMoives } from "../utils/__redux_store__/movieSlice";

const usePopularMovies = () => {
  const disptch = useDispatch();
  const getMovieData = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => disptch(addPopularMoives(res.results)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovieData();
  }, []);
};

export default usePopularMovies;
