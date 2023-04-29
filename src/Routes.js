import App from "./Main/LandingPage/LandingPage";
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from "./Main/Governance/Dashboard.jsx";
import Mission from "./Main/Mission/Mission";
import CharityResources from "./Main/CharityResources/CharityResources";
const Routes_ = () => {
    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/app/dashboard" element={<Dashboard />} />
                    <Route path="/charities" element={<CharityResources />} />
                    <Route path="*" element={<pre><p><meta http-equiv="refresh" content="0; URL=/" /></p></pre>} />
                    <Route path="/app/*" element={<pre><p><meta http-equiv="refresh" content="0; URL=/app/dashboard" /></p></pre>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routes_;