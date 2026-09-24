import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/__redux_store__/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTraler = (movieId) => {
const dispatch = useDispatch();
  useEffect(() => {
    if (!movieId) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results.find((video) => video.type === "Trailer");
        dispatch(addTrailerVideo(trailer))
      })
  }, [movieId]);
}

export default useMovieTraler