
import React, { useState } from 'react';
import "./SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm);
    console.log('Search term:', searchTerm);
  }
  

  return (
    <form onSubmit={handleSubmit} className="inputbar">
  <input type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
  <button type='submit'>Search</button>
</form>

  );
}

export default SearchBar;



