import { createSlice } from "@reduxjs/toolkit";
import jsonData from './../../../info.json';

export const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        about: []
    },
    reducers: {
        setAboutData: (state, action) => {
            state.about = action.payload;
        }
    }
});

export const {setAboutData} = aboutSlice.actions;

export default aboutSlice.reducer;

export const fetchAboutEnglish = () => {
    return (dispatch) => {
       dispatch(setAboutData(jsonData.english.about)) 
    }
}