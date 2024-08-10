import React from "react";
import "./HomepageNavbar.css"
import image from "../../assets/gentech-logo.svg"

export const HomepageNavbar = () => {
    return <div id="navbar">
        <img src={image} alt="GenTech logo" id="logo" />

        <div className="navbar-links">
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Resources</a>
            <a href="">Members</a>
            <a href="">Blog</a>
        </div>

        <button className="navbar-button">Join</button>
        <button className="navbar-button">Login</button>
    </div>  
}