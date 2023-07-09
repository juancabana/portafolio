import { configureStore } from "@reduxjs/toolkit";
// Reducers 
import home from './slices/home/index';
import about from "./slices/about";
import skills from "./slices/skills";
import projects from './slices/projects/index';

export default configureStore({
    reducer: {
        home,
        about,
        skills,
        projects,

    }
})
