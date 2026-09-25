import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies?.length) return null;

  const firstMovie = movies[0];

  const { original_title, overview, id: movieId } = firstMovie;

  return (
    <div className="relative">
      <VideoBackground movieId={movieId}></VideoBackground>
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
    </div>
  );
};

export default MainContainer;
