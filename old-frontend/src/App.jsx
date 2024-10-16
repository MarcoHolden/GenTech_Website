// Entry point for the website, made this seprate for clartiy

import React from "react";

import { HomepageBody } from "./components/HomepageBody/HomepageBody";
import "./App.css"
import CursorTrail from './components/CursorTrail';
import { HomepageNavbar } from "./components/HomepageNavbar/HomepageNavbar";

export const App = () => {
    return <div id="app-container">
        <HomepageNavbar />
        <CursorTrail />
        <HomepageBody />
    </div>
}