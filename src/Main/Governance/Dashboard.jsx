import React from "react";
import VoteInterface from "./voting/Voting";
import LowerSection from "./organizations/Organizations";
import Navbar from "../Navbar/Navbar";

function Dash() {
    return(
        <div>
        <Navbar />
        <VoteInterface />
        <LowerSection />
        </div>
    )
}

export default Dash;