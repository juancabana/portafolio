import { configureStore } from "@reduxjs/toolkit";
// Reducers
import language from "./slices/language/index";
import theme from "./slices/theme";
import data from "./slices/data";

export default configureStore({
  reducer: {
    data,
    language,
    theme,
  },
});
