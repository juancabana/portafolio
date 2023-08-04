import { createSlice } from "@reduxjs/toolkit";
import jsonData from "./../../../info.json";

export const homeSlice = createSlice({
  name: "data",
  initialState: {
    data: jsonData.english,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = homeSlice.actions;

export default homeSlice.reducer;

export const setEnglish = () => {
  return (dispatch) => {
    dispatch(setData(jsonData.english));
  };
};
export const setSpanish = () => {
  return (dispatch) => {
    dispatch(setData(jsonData.spanish));
  };
};
