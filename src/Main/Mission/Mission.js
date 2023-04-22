import Navbar from "../Navbar/Navbar";
import "./mission.css"

function Mission() {
    return(
        <div>
            <Navbar />
            <h1 className="mission_heading">Our Whitepaper</h1>
            <iframe src="http://localhost:3000/assets/whitepaper/v1/whitepaper.html" className="whitepaper_html" />
        </div>
    )
}

export default Mission;