import VoteInterface from "./voting/Voting";
import LowerSection from "./organizations/Organizations";
import Navbar from "../Navbar/Navbar";

function Dashboard() {
    return(
        <div>
            <Navbar />
            <VoteInterface />
            <LowerSection />
        </div>
    )
}

export default Dashboard;