import Navbar from "../Navbar/Navbar";
import "./mission.css"

function Mission() {
    return(
        <div>
            <Navbar />
            <h1 className="mission_heading">Our Whitepaper</h1>
            <a className="mission_whitepaper"href="https://github.com/Blockcharity/whitepaper">View Whitepaper</a>
        </div>
    )
}

export default Mission;