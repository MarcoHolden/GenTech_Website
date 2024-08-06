// Entry point for the website, made this seprate for clartiy

import React from "react";
import "./App.css"
<<<<<<< HEAD
import CursorTrail from './components/CursorTrail';
=======
import { HomepageNavbar } from "./components/HomepageNavbar/HomepageNavbar";
import { MemberPicture } from "./components/MemberPicture/MemberPicture";
>>>>>>> d286edcc90e1d5cc6492506ff21a7fdd4d105230

export const App = () => {
    return <div id="app-container">
        <HomepageNavbar />
<<<<<<< HEAD
        <CursorTrail />
=======
        <div id="member-profiles">
            <MemberPicture src="./member_pictures/1.jpg" />            
            <MemberPicture src="./member_pictures/2.jpg" />            
            <MemberPicture src="./member_pictures/3.jpg" />            
        </div>
>>>>>>> d286edcc90e1d5cc6492506ff21a7fdd4d105230
    </div>
}