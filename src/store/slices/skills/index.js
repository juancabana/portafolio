import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    skills: [],
  },
  reducers: {
    setSkillsData: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { setSkillsData } = skillsSlice.actions;

export default skillsSlice.reducer;

export const setSkillsEnglish = (data) => {
  return (dispatch) => {
    dispatch(setSkillsData(data));
  };
};
export const setSkillsSpanish = (data) => {
  return (dispatch) => {
    dispatch(setSkillsData(data));
  };
};
