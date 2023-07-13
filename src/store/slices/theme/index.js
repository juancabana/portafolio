import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'dark'
    },
    reducers: {
        setThemeData: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const {setThemeData} = themeSlice.actions;

export default themeSlice.reducer;

export const setTheme = (theme) => {
    return (dispatch) => {
       dispatch(setThemeData(theme)) 
    }
}
