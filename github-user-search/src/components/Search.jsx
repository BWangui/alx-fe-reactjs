import React, { useState } from 'react';

const AdvancedSearch = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the search parameters to the parent component
    onSearch({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white shadow-md rounded">
      {/* Username Field */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
          GitHub Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Location Field */}
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Minimum Repositories Field */}
      <div className="mb-4">
        <label htmlFor="minRepos" className="block text-gray-700 font-bold mb-2">
          Minimum Repositories
        </label>
        <input
          id="minRepos"
          type="number"
          placeholder="Enter minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default AdvancedSearch;
