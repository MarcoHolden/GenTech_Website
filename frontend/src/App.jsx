// Entry point for the website, made this seprate for clartiy

import React from "react";
import { HomepageNavbar } from "./components/HomepageNavbar/HomepageNavbar";
import "./App.css"
import CursorTrail from './components/CursorTrail';

export const App = () => {
    return <div id="app-container">
        <HomepageNavbar />
        <CursorTrail />
    </div>
}