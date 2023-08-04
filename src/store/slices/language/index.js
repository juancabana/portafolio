import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "english",
  },
  reducers: {
    setSpanishLanguage: (state, action) => {
      state.language = action.payload;
    },
    setEnglishLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const setEnglish = () => {
  return (dispatch) => {
    dispatch(setEnglishLanguage("english"));
  };
};
export const setSpanish = () => {
  return (dispatch) => {
    dispatch(setSpanishLanguage("spanish"));
  };
};
export const { setSpanishLanguage, setEnglishLanguage } = languageSlice.actions;

export default languageSlice.reducer;
