import React from "react";
import VoteInterface from "./voting/Voting";
import LowerSection from "./organizations/Organizations";
import NavbarApp from "../Navbar/NavbarApp";

function Dashboard() {
    return(
        <div>
        <NavbarApp />
        <VoteInterface />
        <LowerSection />
        </div>
    )
}

export default Dashboard;