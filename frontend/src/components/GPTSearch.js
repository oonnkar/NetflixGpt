import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <main className="relative z-0 min-h-screen w-full bg-black px-3 pb-10 pt-20 text-white sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </main>
  );
};

export default GPTSearch;