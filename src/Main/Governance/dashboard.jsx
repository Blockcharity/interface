import VoteInterface from "./voting";
import LowerSection from "./organizations";
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