import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMoives: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMoives: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMoives,
  addPopularMoives,
  addTopRatedMovies,
  addTrailerVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
