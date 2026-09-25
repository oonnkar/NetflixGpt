import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <main className="relative z-0 w-full bg-black px-4 pt-24 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </main>
  );
};

export default GPTSearch;