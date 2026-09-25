import { createSlice } from "@reduxjs/toolkit";

const userChoicesSlice  = createSlice({
    name : "userChoices", 
    initialState : {
        lang : 'en'
    }, 
    reducers : {
        changeLanguage: (state ,action) => {
            state.lang = action.payload;
        }
    }
})

export const {changeLanguage} = userChoicesSlice.actions;
export default userChoicesSlice.reducer;