import React, { useState } from 'react';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to Grantly</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for grants"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ padding: '10px', width: '300px' }}
                />
                <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
                    Search
                </button>
            </form>
        </div>
    );
}

export default App;