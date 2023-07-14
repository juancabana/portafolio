import { createSlice } from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    about: [],
  },
  reducers: {
    setAboutData: (state, action) => {
      state.about = action.payload;
    },
  },
});

export const { setAboutData } = aboutSlice.actions;

export default aboutSlice.reducer;

export const setAboutEnglish = (data) => {
  return (dispatch) => {
    dispatch(setAboutData(data));
  };
};
export const setAboutSpanish = (data) => {
  return (dispatch) => {
    dispatch(setAboutData(data));
  };
};
