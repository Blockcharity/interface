import App from "./Main/LandingPage/LandingPage";
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from "./Main/Governance/Dashboard.jsx";
import Mission from "./Main/Mission/Mission";
const Routes_ = () => {
    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<pre><p>   ERROR 404 NOT FOUND - Sorry, this link is invalid or we didn't finish developing this page.</p></pre>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routes_;