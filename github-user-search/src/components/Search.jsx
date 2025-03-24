import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Search
      </button>
    </form>
  );
};

export default Search;
