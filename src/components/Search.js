import React from "react";

function Search({ search, originalListings, listings, setListings, handleChange }) {
  
  function handleSubmit(e) {
    e.preventDefault();
    const filteredListings = listings.filter(list => list.description.toLowerCase().includes(search.toLowerCase()))
    if (search) {
      setListings(filteredListings) 
    } else {
      setListings(originalListings)
    }
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
