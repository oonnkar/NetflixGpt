import React from "react";
import { useSelector } from "react-redux";
import { languageSyntax } from "../utils/language";

const GPTSearchBar = () => {
  const lang = useSelector((store) => store.userChoices.lang);
  
  return (
    <div className="pt-8 px-4 md:px-8">
      <form className="mx-auto flex w-full max-w-3xl overflow-hidden rounded-full bg-white shadow-lg">
        <input
          type="text"
          placeholder={
            languageSyntax[lang].searchPrompt
          }
          className="flex-1 border-none bg-transparent px-5 py-4 text-lg text-gray-800 placeholder:text-gray-500 focus:outline-none"
        />
        <button className="bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-red-700">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
