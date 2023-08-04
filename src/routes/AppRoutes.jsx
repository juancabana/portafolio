import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Proyects from "../Pages/Proyects";
import Contact from "../Pages/Contact";
import NotFoundPage from "../Pages/NotFound";


export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/skills" element={<Skills />} />
                <Route exact path="/projects" element={<Proyects />} />
                <Route exact path="contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </HashRouter>

    );
}