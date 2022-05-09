import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Proyects from "../Pages/Proyects/Proyects";


export default function AppRouter() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/proyects" element={<Proyects/>}/>
                </Routes>
            </BrowserRouter>
            
        );
}