import React, { useEffect, useState } from "react";
import "./HomepageNavbar.css";
import logoImage from "../../assets/gentech-logo.svg";
import hamburgerIcon from "../../assets/hamburger-svg.svg";
import cancelIcon from "../../assets/cancel-svg.svg";
import { useMediaQuery } from "../../utils/useMediaQuery";

export const HomepageNavbar = () => {
    // State that keeps track if the icon for small screens is open or closed
    const [isOpen, setisOpen] = useState(false);
    const isSmallScreen = useMediaQuery("(max-width: 590px)");

    // When we come from big creen to small, always close the burger icon at the start
    useEffect(() => setisOpen(false), [isSmallScreen]);

    return (
        <div id="navbar">
            <img src={logoImage} alt="GenTech logo" id="logo" />

            <div className="navbar-widescreen">
                <div className="navbar-links">
                    <a href="">About</a>
                    <a href="">Projects</a>
                    <a href="">Resources</a>
                    <a href="">Members</a>
                    <a href="">Events</a>
                </div>

                <button className="navbar-button">Join</button>
                <button className="navbar-button">Login</button>
            </div>

            {/* Icon to make the screen responsive */}
            <img
                className="navbar-responsive-icon"
                src={isOpen ? cancelIcon : hamburgerIcon}
                alt="Hamburger button for responsiveness"
                onClick={() => setisOpen(!isOpen)}
            />

            {/* If the burger icon is open, render the navbar links */}

            {isOpen && isSmallScreen && <div className="navbar-links burger">
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Resources</a>
                <a href="">Members</a>
                <a href="">Events</a>
                
                <button className="navbar-button">Join</button>
                <button className="navbar-button">Login</button>

            </div>}
        
        </div>
    );
};
