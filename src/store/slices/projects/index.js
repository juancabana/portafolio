import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    setProjectsData: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjectsData } = projectsSlice.actions;

export default projectsSlice.reducer;

export const setProjectsEnglish = (data) => {
  return (dispatch) => {
    dispatch(setProjectsData(data));
  };
};
export const setProjectsSpanish = (data) => {
  return (dispatch) => {
    dispatch(setProjectsData(data));
  };
};
