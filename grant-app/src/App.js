import React, { useState } from 'react';
import './App.css'; // Add this line for external CSS
import Individuals from './Individuals';
import Nonprofits from './Nonprofits';

function App() {
    const [currentPage, setCurrentPage] = useState('landing');

    // Function to handle button clicks
    const handleButtonClick = (type) => {
        setCurrentPage(type);
    };

    return (
        <div className="app-container">
            {/* Floating bubbles */}
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>

            {currentPage === 'landing' ? (
                <>
                    <h1 className="app-header">Welcome to Grantly</h1>
                    <div className="button-container">
                        <button className="nav-button" onClick={() => handleButtonClick('Individuals')}>For Individuals</button>
                        <button className="nav-button" onClick={() => handleButtonClick('Nonprofits')}>For Nonprofits</button>
                    </div>
                </>
            ) : currentPage === 'Individuals' ? (
                <Individuals />
            ) : (
                <Nonprofits />
            )}
        </div>
    );
}

export default App;