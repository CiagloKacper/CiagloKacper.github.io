import React from "react";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import TicTac from "./pages/projects/TicTac";
import Calculator from "./pages/projects/calc";
import Projects from "./pages/projects";
import Typer from "./pages/projects/typer";

function RouteWrapper() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects/tictac" element={<TicTac/>} />
            <Route path="/projects/calculator" element={<Calculator/>} />
            <Route path="/projects/typer" element={<Typer/>}/>
            <Route path="/projects/" element={<Projects/>}/>
        </Routes>
    )
}
export default RouteWrapper;