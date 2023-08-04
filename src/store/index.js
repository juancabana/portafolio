import { configureStore } from "@reduxjs/toolkit";
// Reducers 
import home from './slices/home/index';
import about from "./slices/about";
import skills from "./slices/skills";
import projects from './slices/projects/index';
import language from "./slices/language/index";
import theme from "./slices/theme";

export default configureStore({
    reducer: {
        home,
        about,
        skills,
        projects,
        language,
        theme,

    }
})
