
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;



