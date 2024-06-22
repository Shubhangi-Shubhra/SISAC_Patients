import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patient from './Patient';
import SuccessPage from './SuccessPage';
import SuccessPagelogin from './SuccessPagelogin'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Patient />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/successlogin" element={<SuccessPagelogin />} />
            </Routes>
        </Router>
    );
}

export default App;
