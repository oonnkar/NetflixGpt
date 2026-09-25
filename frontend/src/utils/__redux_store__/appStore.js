import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import GPTReducer from './GPTSlice';
import userChoicesReducer from './userChoicesSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies : moviesReducer,
    GPT: GPTReducer, 
    userChoices : userChoicesReducer
  },
});
export default appStore;
