import React from "react";
import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return <div className="group relative w-full cursor-pointer overflow-hidden rounded-md bg-[#181818] shadow-lg transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-2xl hover:shadow-black/70">
  <img
    className="aspect-[2/3] h-auto w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-60"
    src={`${TMDB_IMAGE_URL}${movie?.poster_path}.jpg`}
    alt={movie?.title || "Movie poster"}
  />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent px-3 pb-3 pt-16">
    <h2 className="truncate text-sm font-bold text-white">{movie?.title}</h2>
    <div className="mt-2 flex items-center gap-2 text-xs text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="rounded border border-gray-500 px-1 text-[10px] font-semibold">HD</span>
      <span>{movie?.release_date?.slice(0, 4)}</span>
      <span className="text-green-400">98% Match</span>
    </div>
  </div>
  </div>;
};

export default MovieCard;
