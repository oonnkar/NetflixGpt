import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
    GPTMovies : null, 
    GPTMovieTitles : null
  },
  reducers: {
    toogleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovie : (state, action) => { 
      const {movieNames, movieResults} = action.payload;
      state.GPTMovies = movieResults;
      state.GPTMovieTitles  = movieNames;
    }
  },
});

export const { toogleGPTSearchView , addGPTMovie} = gptSlice.actions;
export default gptSlice.reducer;
