import App from "./App";
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const _Routes = () => {
    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default _Routes;