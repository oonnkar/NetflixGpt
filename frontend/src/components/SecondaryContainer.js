import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const rows = [
    ["Now Playing", movies.nowPlayingMovies],
    ["Popular on Netflix", movies.popularMovies],
    ["Top Rated", movies.topRatedMovies],
  ].filter(([, movieList]) => movieList?.length);

  return (
    <div className="relative z-10 -mt-24 overflow-hidden bg-gradient-to-b from-transparent via-black/95 to-black px-4 pb-20 pt-14 sm:-mt-36 sm:px-8 sm:pt-20 lg:px-12">
      {rows.map(([title, movieList]) => (
        <section
          key={title}
          className="group mb-10 overflow-hidden rounded-xl last:mb-0"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-red-500 sm:text-xl">
              {title}
            </h2>
            <span className="hidden text-xs font-semibold text-red-500 opacity-0 transition-opacity group-hover:opacity-100 sm:block">
              Explore all <span aria-hidden="true">›</span>
            </span>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-white/5 p-2 shadow-2xl ring-1 ring-white/10 after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-10 after:bg-gradient-to-l after:from-black after:to-transparent sm:after:w-16">
            <MovieList title="" movies={movieList} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default SecondaryContainer;
