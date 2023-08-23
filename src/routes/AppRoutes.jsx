import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home";
import About from "../components/Pages/About";
import Skills from "../components/Pages/Skills";
import Proyects from "../components/Pages/Proyects";
import Contact from "../components/Pages/Contact";
import NotFoundPage from "../components/Pages/NotFound";
import Prueba from "../components/Pages/Prueba";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Proyects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/prueba" element={<Prueba />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
