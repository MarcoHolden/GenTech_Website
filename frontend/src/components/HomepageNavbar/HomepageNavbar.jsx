import React from "react";
import "./HomepageNavbar.css"
import image from "../../assets/gentech-logo.gif"

export const HomepageNavbar = () => {
    return <div id="navbar">
        <img src={image} alt="GenTech logo" id="logo" />
        <button className="navbar-button">Join</button>
        <button className="navbar-button">Login</button>
    </div>  
}