// Entry point for the website, made this seprate for clartiy

import React from "react";
import "./App.css"
import { HomepageNavbar } from "./components/HomepageNavbar/HomepageNavbar";
import { MemberPicture } from "./components/MemberPicture/MemberPicture";

export const App = () => {
    return <div id="app-container">
        <HomepageNavbar />
        <div id="member-profiles">
            <MemberPicture src="./member_pictures/1.jpg" />            
            <MemberPicture src="./member_pictures/2.jpg" />            
            <MemberPicture src="./member_pictures/3.jpg" />            
        </div>
    </div>
}