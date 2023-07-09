import { createSlice } from "@reduxjs/toolkit";
import jsonData from '../../../info.json';

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: []
    },
    reducers: {
        setProjectsData: (state, action) => {
            state.projects = action.payload;
        }
    }
});

export const {setProjectsData} = projectsSlice.actions;

export default projectsSlice.reducer;

export const fetchProjectsEnglish = () => {
    return (dispatch) => {
       dispatch(setProjectsData(jsonData.english.projects)) 
    }
}