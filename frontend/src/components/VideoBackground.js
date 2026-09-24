import React from "react";
import { useSelector } from "react-redux";
import useMovieTraler from "../hooks/useMovieTraler";

const VideoBackground = ({ movieId }) => {
  useMovieTraler(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <iframe
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-screen w-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 border-0"
        src={
          trailerVideo?.key
            ? `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&rel=0`
            : undefined
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.25),rgba(0,0,0,.06)_55%,rgba(0,0,0,.2)),linear-gradient(0deg,rgba(0,0,0,.25),transparent_45%)]"
      />
    </div>
  );
};

export default VideoBackground;
