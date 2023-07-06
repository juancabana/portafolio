import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Proyects from "../Pages/Proyects/Proyects";
import Contact from "../Pages/Contact/Contact";
import NotFoundPage from "../Pages/NotFound/NotFound";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Proyects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </BrowserRouter>

    );
}