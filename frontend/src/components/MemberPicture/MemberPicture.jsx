import React from "react"
import "./MemberPicture.css"
import memberPlaceholderPic from "../../assets/member-profile-placeholder.svg"

export const MemberPicture = () => {
    return <div>
        <img src={memberPlaceholderPic} alt="Member profile" className="member-picture" />
    </div> 
}