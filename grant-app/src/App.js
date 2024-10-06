import React from 'react';
import './App.css';  // Add this line for external CSS

function App() {
    // Function to handle button clicks
    const handleButtonClick = (type) => {
        console.log(`Navigating to ${type} page`);  // Log the action (you can replace this with actual navigation logic later)
        alert(`Navigating to ${type} page`);  // Alert to simulate navigation
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

            <h1 className="app-header">Welcome to Grantly</h1>
            <div className="button-container">
                <button className="nav-button" onClick={() => handleButtonClick('Individuals')}>For Individuals</button>
                <button className="nav-button" onClick={() => handleButtonClick('Nonprofits')}>For Nonprofits</button>
            </div>
        </div>
    );
}

export default App;