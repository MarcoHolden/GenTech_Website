import React from "react";
import "./OpportunityCard.css"; 

export const OpportunityCard = () => {
    return <div className="opportunity-card card">
        <div className="opportunity-card__role">Role: Name of role @ Company</div>
        <div className="opportunity-card__deadline">Deadline: 1/2/3 @ 11:59 EST</div>
        <div className="opportunity-card__link">Link to apply: INSERT LINK </div>
    </div>
}