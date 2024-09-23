import React from "react";
import { OpportunityCard } from "./OpportunityCard/OpportunityCard";

export const EarlyOpportunities = () => {
    return <>
      <h1 id="opportunities-title">Checkout these Early Career Opportunities</h1>
      <div className="opportunities">
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
      </div>

    </>
}