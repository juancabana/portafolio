import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    home: [],
  },
  reducers: {
    setHomeData: (state, action) => {
      state.home = action.payload;
    },
  },
});

export const { setHomeData } = homeSlice.actions;

export default homeSlice.reducer;

export const setHomeEnglish = (data) => {
  return (dispatch) => {
    // const dataString = localStorage.getItem("dataEnglish");
    // const data = JSON.parse(dataString);
    dispatch(setHomeData(data));
  };
};
export const setHomeSpanish = (data) => {
  return (dispatch) => {
    dispatch(setHomeData(data));
  };
};
