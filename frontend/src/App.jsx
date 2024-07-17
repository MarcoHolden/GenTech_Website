// Entry point for the website, made this seprate for clartiy

import React from "react";
import "./App.css"
import { HomepageNavbar } from "./components/HomepageNavbar/HomepageNavbar";
import { MemberPicture } from "./components/MemberPicture/MemberPicture";

export const App = () => {
    return <div id="app-container">
        <HomepageNavbar />
        <div id="member-profiles">
            <MemberPicture />            
            <MemberPicture />            
            <MemberPicture />            
        </div>
    </div>
}