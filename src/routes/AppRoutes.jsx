import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";


export default function AppRouter() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </BrowserRouter>
            
        );
}