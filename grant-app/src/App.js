import React, { useState } from 'react';
import './App.css';  // Add this line for external CSS

function App() {
    // State to manage the search term entered by the user
    const [searchTerm, setSearchTerm] = useState('');

    // State to manage the organization profile form inputs
    const [orgDetails, setOrgDetails] = useState({
        name: '',
        size: '',
        location: '',
        focusArea: ''
    });

    // Mock data to represent grant opportunities
    // Later, this will be replaced with real data from an API or database
    const mockGrants = [
        { id: 1, title: 'Education Grant', description: 'Supports education projects in rural areas.' },
        { id: 2, title: 'Housing Development Grant', description: 'Focuses on affordable housing initiatives.' },
        { id: 3, title: 'Poverty Alleviation Fund', description: 'Grants to help reduce poverty in urban regions.' }
    ];

    // Handle input changes for the search bar
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);  // Update the search term as the user types
    };

    // Handle form submission for the search bar
    const handleSearchSubmit = (e) => {
        e.preventDefault();  // Prevent the page from refreshing
        console.log('Searching for:', searchTerm);  // Log the search term (later will trigger a search)
        // For now, just log the search term. In the future, you will filter the grant list based on this.
    };

    // Handle input changes for the organization form
    const handleOrgChange = (e) => {
        setOrgDetails({
            ...orgDetails,  // Spread in previous values
            [e.target.name]: e.target.value  // Update the specific field
        });
    };

    // Handle form submission for the organization profile
    const handleOrgSubmit = (e) => {
        e.preventDefault();  // Prevent page from refreshing
        console.log('Organization Details:', orgDetails);  // Log organization details (later save to database)
        // In the future, you will send this data to the backend to save in the database
    };

    return (
        <div className="app-container">
            {/* Header */}
            <h1 className="app-header">Welcome to Grantly</h1>

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search for grants"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {/* Static Grant Listings */}
            <div className="grants-section">
                <h2>Grant Opportunities</h2>
                <ul>
                    {mockGrants.map(grant => (
                        <li key={grant.id} className="grant-item">
                            <h3>{grant.title}</h3>
                            <p>{grant.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Organization Profile Form */}
            <div className="org-profile-section">
                <h2>Create Organization Profile</h2>
                <form onSubmit={handleOrgSubmit} className="org-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Organization Name"
                        value={orgDetails.name}
                        onChange={handleOrgChange}
                        className="org-input"
                    />
                    <input
                        type="number"
                        name="size"
                        placeholder="Organization Size"
                        value={orgDetails.size}
                        onChange={handleOrgChange}
                        className="org-input"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={orgDetails.location}
                        onChange={handleOrgChange}
                        className="org-input"
                    />
                    <input
                        type="text"
                        name="focusArea"
                        placeholder="Focus Area (e.g., Housing, Education)"
                        value={orgDetails.focusArea}
                        onChange={handleOrgChange}
                        className="org-input"
                    />
                    <button type="submit" className="org-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
