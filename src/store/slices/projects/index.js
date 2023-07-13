import { createSlice } from "@reduxjs/toolkit";

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

export const fetchProjectsEnglish = (data) => {
    return (dispatch) => {
       dispatch(setProjectsData(data)) 
    }
}
export const fetchProjectsSpanish = (data) => {
    return (dispatch) => {
       dispatch(setProjectsData(data)) 
    }
}