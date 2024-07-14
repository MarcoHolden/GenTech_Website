import React from "react";
import "./HomepageNavbar.css"
import image from "../../assets/gentech-logo.gif"

export const HomepageNavbar = () => {
    return <div id="navbar">
        <img src={image} alt="GenTech logo" id="logo" />
        <button>Join</button>
        <button>Login</button>
    </div>  
}