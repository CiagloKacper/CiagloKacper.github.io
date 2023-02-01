import React from "react";
import HomePage from "./pages/home";
import { Route,Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/about";
import TicTac from "./pages/projects/TicTac";
import Calculator from "./pages/projects/calc";
import Projects from "./pages/projects";

function RouteWrapper() {
    const location = useLocation().pathname;
    console.log(location)
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects/tictac" element={<TicTac/>} />
            <Route path="/projects/calculator" element={<Calculator/>} />
            <Route path="/projects/" element={<Projects/>}/>
        </Routes>
    )
}
export default RouteWrapper;