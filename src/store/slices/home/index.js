import { createSlice } from "@reduxjs/toolkit";
import jsonData from './../../../info.json';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        home: []
    },
    reducers: {
        setHomeData: (state, action) => {
            state.home = action.payload;
        }
    }
});

export const {setHomeData} = homeSlice.actions;

export default homeSlice.reducer;

export const fetchHomeEnglish = () => {
    return (dispatch) => {
       dispatch(setHomeData(jsonData.english.home)) 
    }
}
export const fetchHomeSpanish = () => {
    return (dispatch) => {
       dispatch(setHomeData(jsonData.spanish.home)) 
    }
}