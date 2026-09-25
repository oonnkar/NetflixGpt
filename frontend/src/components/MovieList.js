import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <section className="bg-black px-4 py-7 sm:px-8 lg:px-12">
      <h1 className="mb-5 border-l-4 border-red-600 pl-3 text-xl font-bold tracking-wide text-white drop-shadow-md sm:text-2xl">
        {title}
      </h1>
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className="group relative w-32 flex-shrink-0 overflow-hidden rounded-md bg-zinc-900 shadow-lg shadow-black/40 transition duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-red-950/70 sm:w-40 md:w-48"
          >
            <MovieCard movie={movie}></MovieCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;
