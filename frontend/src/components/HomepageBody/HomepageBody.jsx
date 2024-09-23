import React from "react";
import "./HomepageBody.css"
import { MemberPicture } from "../MemberPicture/MemberPicture";
import { UpcomingEvents } from "../UpcomingEvents/UpcomingEvents";
import { EarlyOpportunities } from "../EarlyOpportunities/EarlyOpportunities";

export const HomepageBody = () => {
    return <div className="content">
        <div className="containerAnimated1">
            <p className="textAnimated1">&lt; Welcome To GenTech &gt;</p>
        </div>
        
        <div id="member-profiles">
            <MemberPicture src="./member_pictures/1.jpg" />            
            <MemberPicture src="./member_pictures/2.jpg" />            
            <MemberPicture src="./member_pictures/3.jpg" />            
        </div>

        {/* Upcoming events section */}
        <UpcomingEvents />

        {/* Early opportunities section */}
        <EarlyOpportunities />

    </div>
}