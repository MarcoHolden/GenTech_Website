import React from "react"
import "./MemberPicture.css"
import memberPlaceholderPic from "../../assets/member-profile-placeholder.svg"

export const MemberPicture = ( {src} ) => {
    // If we dont specify the image source, use defualt placeholder
    const member_picture = src ? src : memberPlaceholderPic; 

    // Create 2 classes to have double border effect
    return <div className="member-picture-container">
        <img src={member_picture} alt="Member profile" className="member-picture" />
    </div> 
}