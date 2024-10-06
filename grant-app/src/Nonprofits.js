import React, { useState } from 'react';
import './App.css';  // Import external CSS

function Nonprofits() {
    // State to manage the search term entered by the user
    const [searchTerm, setSearchTerm] = useState('');
    const [orgDetails, setOrgDetails] = useState({
        name: '',
        ein: '',
        size: '',
        location: '',
        focusArea: ''
    });

    // Mock data to represent grant opportunities
    const mockGrants = [
        { id: 1, title: 'Education Grant', description: 'Supports education projects in rural areas.' },
        { id: 2, title: 'Housing Development Grant', description: 'Focuses on affordable housing initiatives.' },
        { id: 3, title: 'Poverty Alleviation Fund', description: 'Grants to help reduce poverty in urban regions.' }
    ];

    // Filter the mock grants based on the search term
    const filteredGrants = mockGrants.filter(grant =>
        grant.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle input changes for the search bar
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle form submission for the search bar
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    // Handle input changes for the organization form
    const handleOrgChange = (e) => {
        setOrgDetails({
            ...orgDetails,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission for the organization profile
    const handleOrgSubmit = (e) => {
        e.preventDefault();
        console.log('Organization Details:', orgDetails);
        // Here you can send this data to the backend to save in the database
    };

    return (
        <div className="app-container">
            <h1 className="app-header">Nonprofits Page</h1>

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

            {/* Filtered Grant Listings */}
            <div className="grants-section">
                <h2>Grant Opportunities</h2>
                <ul>
                    {filteredGrants.length > 0 ? (
                        filteredGrants.map(grant => (
                            <li key={grant.id} className="grant-item">
                                <h3>{grant.title}</h3>
                                <p>{grant.description}</p>
                            </li>
                        ))
                    ) : (
                        <p>No grants found.</p>
                    )}
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
                        type="text"
                        name="ein"
                        placeholder="EIN Number"
                        value={orgDetails.ein}
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
            <button className="back-button" onClick={() => window.location.href = '/'}>Back to Homepage</button>

        </div>
    );
}

export default Nonprofits;