import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { GPTMovies, GPTMovieTitles } = useSelector((store) => store.GPT);

  if (!GPTMovies)
    return (
      <div className="p-8 text-center text-[1.1rem] text-gray-400">
        “movies where the dog is clearly the smartest character.”
      </div>
    );

  return (
    <div className="rounded-xl bg-gradient-to-b from-gray-900 to-gray-950 py-4 pb-8">
      {GPTMovies.map((movie, index) => (
        <MovieList
          key={GPTMovieTitles?.[index] || index}
          title={GPTMovieTitles?.[index] || movie}
          movies={movie.results}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
