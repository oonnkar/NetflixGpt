import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageSyntax } from "../utils/language";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovie } from "../utils/__redux_store__/GPTSlice";

const GPTSearchBar = () => {
  const lang = useSelector((store) => store.userChoices.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMoviesByName = async (movieName) => {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName.trim())}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  async function handleMovieSearch() {
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

    if (!apiKey) {
      console.error("REACT_APP_GEMINI_API_KEY is not configured.");
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    const content =
      "You are a movie recommendation system. Return 5 movie names as comma-separated values and recommend movies which are " +
      searchText.current.value;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: content,
    });

    const suggestedMovieTitles = response.text.split(",");

    const movieSearchPromises = suggestedMovieTitles.map((movieTitle) =>
      searchMoviesByName(movieTitle),
    );

    const movieSearchResults = await Promise.all(movieSearchPromises);

    dispatch(
      addGPTMovie({
        movieNames: suggestedMovieTitles,
        movieResults: movieSearchResults,
      }),
    );
  }

  return (
    <div className="px-0 pt-4 sm:px-4 md:px-8">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto flex w-full max-w-3xl overflow-hidden rounded-full bg-white shadow-lg"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={languageSyntax[lang].searchPrompt}
          className="min-w-0 flex-1 border-none bg-transparent px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none sm:px-5 sm:py-4 sm:text-lg"
        />
        <button
          onClick={handleMovieSearch}
          className="shrink-0 bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:px-6 sm:py-4 sm:text-base"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
