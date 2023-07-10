import { createSlice } from "@reduxjs/toolkit";
import jsonData from '../../../info.json';

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        skills: []
    },
    reducers: {
        setSkillsData: (state, action) => {
            state.skills = action.payload;
        }
    }
});

export const {setSkillsData} = skillsSlice.actions;

export default skillsSlice.reducer;

export const fetchSkillsEnglish = () => {
    return (dispatch) => {
       dispatch(setSkillsData(jsonData.english.skills)) 
    }
}
export const fetchSkillsSpanish = () => {
    return (dispatch) => {
       dispatch(setSkillsData(jsonData.spanish.skills)) 
    }
}